import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, message, Input, Divider } from "antd";
import { Link } from "react-router-dom";
import { MEDIA_QUERIES } from "../../shared/utils/constants";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

  const toggleAuth = () => {
    setIsSignUp((prev: any) => !prev);
  };

  return (
    <AuthWrapper>
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h3 className="logo">Streamline</h3>
        </Link>
      </nav>
      <FormContainer id="auth">
        <Wrapper>
          <h3>
            {isSignUp ? "Create a new account" : "Sign in to your account"}
          </h3>
          <Form
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Invalid email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  min: 7,
                  message: "Invalid password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {isSignUp && (
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    min: 7,
                    message: "Invalid password!",
                  },
                ]}
              >
                <Input.Password placeholder="Comfirm password" />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Form.Item>
          </Form>
          <small onClick={toggleAuth}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Do not have an account yet? Sign Up"}
          </small>
          <DividerContainer>
            <Divider />
            <span>or</span>
            <Divider />
          </DividerContainer>
          <Button
            block
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.4)",
            }}
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
                width={20}
                height={20}
                style={{ marginRight: "5px" }}
              />
            }
          >
            Sign in with Google
          </Button>
        </Wrapper>
      </FormContainer>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & nav {
    width: 100%;
  }

  & .logo {
    font-family: "Lobster Two", "Manrope", sans-serif;
  }
`;

const FormContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      padding: 0;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 80%;
      padding: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  small {
    cursor: pointer;
    text-align: center;
    color: ${({ theme }) => theme.secondaryColor};
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
    font-weight: bolder;
    font-size: 1.6rem;
  }

  form {
    width: 100%;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    margin: 0px 5px;
  }
`;

export default Auth;
