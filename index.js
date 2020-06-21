import express from 'express';
import bodyParser from 'body-parser';
import minify from 'express-minify';
import compression from 'compression';
import './db/mongoose';
import authRoutes from './routes/authRoutes';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(minify());
app.use(compression());

// api
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is up !');
});
