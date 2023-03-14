import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { CallBacksFireBaseType } from "../AppContainer";

// store 관련
// useSelector : store의 state 가져오기
// useDispatch : store의 액션 실행하기
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmout } from "../store/counterSlice";
import type { RootState } from "../store/store";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

type PropsType = {
  userLogin: Boolean;
  callBacksFireBase: CallBacksFireBaseType;
};
const Login = ({ userLogin, callBacksFireBase }: PropsType) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    callBacksFireBase.fbLogin(values.email, values.password);
  };

  useEffect(() => {
    if (userLogin) {
      navigate("/");
    }
  }, [userLogin]);

  return (
    <div style={{ paddingBottom: 20, minHeight: 500 }}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{}}
        style={{ maxWidth: "95%" }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Space>
            {/* 회원가입 데이터 전송 */}
            <Button type="primary" htmlType="submit">
              Login
            </Button>

            {/* 회원가입 창으로 이동 */}
            <Button
              type="primary"
              htmlType="button"
              onClick={() => navigate("/join")}
            >
              Member Join
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
