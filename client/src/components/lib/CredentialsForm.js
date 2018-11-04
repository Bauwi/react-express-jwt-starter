import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const LoginForm = styled(Form)`
  max-width: 300px;
  width: 300px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  padding: 3rem 0;
  text-align: center;
`;

const LoginFormForgot = styled.a`
  float: right;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const ServerError = styled.p`
  color: red;
`;

const FormItem = Form.Item;

class CredentialsForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      buttonText,
      askUser,
      title,
      forgotPassword,
      serverError,
      isLoading
    } = this.props;
    return (
      <LoginForm onSubmit={this.handleSubmit} className="login-form">
        <FormTitle>{title}</FormTitle>
        <ServerError>{serverError}</ServerError>
        {askUser && (
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="user"
              />
            )}
          </FormItem>
        )}
        <FormItem>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                required: true,
                message: "Please input your email!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          {forgotPassword && (
            <LoginFormForgot href="#">Forgot password</LoginFormForgot>
          )}
          <StyledButton type="primary" htmlType="submit" loading={isLoading}>
            {buttonText}
          </StyledButton>
          <Footer>{this.props.footer}</Footer>
        </FormItem>
      </LoginForm>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(CredentialsForm);

export default WrappedNormalLoginForm;
