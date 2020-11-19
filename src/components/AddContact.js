import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Form, Input, Button } from "antd";

const AddContact = (props) => {
  const { show, handleClose, handleOnFinish, handleOnFinishFailed } = props;
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);
  return (
    <Form
      form={form}
      name="basic"
      initialValues={initialValues}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <>
            <Button
              style={{ marginRight: 20 }}
              type="primary"
              htmlType="submit"
              disabled={
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add
            </Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
};

AddContact.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOnFinish: PropTypes.func.isRequired,
  handleOnFinishFailed: PropTypes.func.isRequired,
};
export default AddContact;
