import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Radio, Card, Form, Input, Space, Typography } from "antd";
import Nav from "../components/nav";

const { Title } = Typography;
const onFinish = (values) => {
  console.log("Received values of form:", values);
};
const generate = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Nav />
      <div className="title-wrap">
        <Title level={1}>Generate Your TimeTable</Title>
      </div>
      <div className="generate-contents-wrap">
        <Form.Item
          label={
            <span style={{ fontSize: "26px", fontWeight: "500" }}>
              Choose the number of slots per day
            </span>
          }
          style={{ marginBottom: "26px" }} // Adjust the marginBottom as needed
        >
          <Radio.Group>
            <Radio
              style={{
                fontSize: "22px",
                marginRight: "8px",
                fontWeight: "500",
              }}
              value="apple"
            >
              7 Slots
            </Radio>
            <Radio style={{ fontSize: "22px", fontWeight: "500" }} value="pear">
              6 Slots
            </Radio>
          </Radio.Group>
        </Form.Item>
        <div className="input-wrap">
          <div className="main-wrap">
            <Title>Main Subjects</Title>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Subject Name",
                            },
                          ]}
                        >
                          <Input placeholder="Subject" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Number of Hours",
                            },
                            {
                              pattern: /^[0-9]+$/,
                              message: "Please enter a valid number",
                            },
                          ]}
                        >
                          <Input placeholder="Hours per week" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        style={{
                          fontSize: "20px",
                          height: "50px",
                        }}
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Subjects
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item></Form.Item>
            </Form>
          </div>

          <div className="lab-wrap">
            <Title>Lab Subjects</Title>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Subject Name",
                            },
                          ]}
                        >
                          <Input placeholder="Subject" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Number of Hours",
                            },
                            {
                              pattern: /^[0-9]+$/,
                              message: "Please enter a valid number",
                            },
                          ]}
                        >
                          <Input placeholder="Hours per week" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        style={{
                          fontSize: "20px",
                          height: "50px",
                        }}
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Subjects
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item></Form.Item>
            </Form>
          </div>
        </div>
        <Button
          style={{
            background: "black",
            color: "white",
            fontSize: "20px",
            height: "50px",
          }}
          type="default"
          htmlType="submit"
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default generate;
