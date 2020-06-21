const { User } = require('../models/user');
const _ = require('lodash');
const { authenticate } = require('../middleware/authenticate');

const authRoutes = (app) => {
  app.post('/api/users', async (req, res) => {
    const user = new User(_.pick(req.body, ['email', 'password', 'username']));
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.header('x-auth', token).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  /* Log in */
  app.post('/api/users/login', async (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);

    try {
      const user = await User.findByCredentials(body.email, body.password);
      const token = await user.generateAuthToken();
      res.header('x-auth', token).send({
        _id: user._id,
        email: user.email,
        username: user.username,
        token,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.get('/api/users/me', authenticate, (req, res) => {
    res.send(req.user);
  });

  /* Remove token on log out */
  app.delete('/api/users/me/token', authenticate, async (req, res) => {
    try {
      await req.user.removeToken(req.token);
      res.status(200).send();
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

export default authRoutes;
