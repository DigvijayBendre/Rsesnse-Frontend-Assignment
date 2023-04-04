/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { AutoComplete,Button, Alert, Cascader, message, Space, DatePicker, Checkbox, Col, Form, Input, InputNumber, Row, Select} from 'antd';
import { useState } from 'react';
const { Option } = Select;



const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="91">+91</Option>
      <Option value="87">+87</Option>
      <Option value="92">+92</Option>
      <Option value="01">+01</Option>
      <Option value="71">+71</Option>
      <Option value="57">+57</Option>
      <Option value="81">+81</Option>
      <Option value="67">+67</Option>
      <Option value="51">+51</Option>
      <Option value="07">+07</Option>
    </Select>
  </Form.Item>
);


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <h1>Rsense Antd Form</h1>
      <p>Frontend : Assignmnet</p>

        <Form
          autoComplete="off"
          labelCol={{ span: 100 }}
          wrapperCol={{ span: 50 }}
          onFinish={(values) => {
            console.log({ values });
            alert("Data Save Sucessfully!");
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          
          }}
        > 
          <Form.Item
           style={{ width: "100%" }}
            name="fullName"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Please Provide Your Right Full Name" />
          </Form.Item>

          <Form.Item
           style={{ width: "100%" }}

            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Please provide your E-Mail Address" />
          </Form.Item>

          

          <Form.Item
          style={{ width: "100%" }}
            name="dob"
            label="D.O.B."
            rules={[
              {
                required: true,
                message: "Please provide your DOB",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Please provide your Date of Birth"
            />
          </Form.Item>
          
          <Form.Item
            style={{ width: "100%" }}
       
            name="Phone"
            label="Mobile"
            
            rules={[
              {
                required: true,
                message: "Please enter your Mobile Number ",
              },
              { whitespace: true },
              {  max: 10},{pattern:new RegExp(/[0-9]/)},
            ]}
            hasFeedback
          >
            <Input placeholder="Please enter your Mobile Number" addonBefore = {prefixSelector} maxLength={12}
            />
          </Form.Item>
            <Form.Item wrapperCol={{span: 100}}>
            <Button style={{ width: "100%", margin:"0,auto"  }}  block type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
