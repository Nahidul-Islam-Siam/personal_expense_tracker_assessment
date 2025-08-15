/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Select, DatePicker, TimePicker, Input, Checkbox, Button } from 'antd';
import 'antd/dist/reset.css'; 
import Link from 'next/link';

const { Option } = Select;

const BookAppointmentPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values:any) => {
    console.log('Form Values:', values);
    // Handle form submission here
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment</h1>

      <Form
        form={form}
        name="book-appointment"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          agree: false,
        }}
      >
        {/* Select a Service */}
        <Form.Item
          label="Select a Service"
          name="service"
          rules={[{ required: true, message: 'Please select a service' }]}
        >
          <Select placeholder="Choose a service">
            <Option value="service1">Service 1</Option>
            <Option value="service2">Service 2</Option>
            <Option value="service3">Service 3</Option>
          </Select>
        </Form.Item>

        {/* Preferred Date and Time */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <Form.Item
            label="Preferred Date"
            name="date"
            rules={[{ required: true, message: 'Please select a date' }]}
          >
            <DatePicker 
              format="MM/DD/YYYY" 
              placeholder="mm/dd/yyyy" 
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item
            label="Preferred Time"
            name="time"
            rules={[{ required: true, message: 'Please select a time' }]}
          >
            <TimePicker 
              format="HH:mm" 
              placeholder="--:--" 
              style={{ width: '100%' }}
              minuteStep={15}
            />
          </Form.Item>
        </div>

        {/* First Name and Last Name */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </div>

        {/* Email Address and Mobile Number */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email address' },
              { type: 'email', message: 'Please enter a valid email address' },
            ]}
          >
            <Input placeholder="Email Address" type="email" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[{ required: true, message: 'Please enter your mobile number' }]}
          >
            <Input placeholder="Mobile Number" type="tel" />
          </Form.Item>
        </div>

        {/* Message */}
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter a message' }]}
        >
          <Input.TextArea rows={4} placeholder="Type here..." />
        </Form.Item>

        {/* Privacy Policy Agreement */}
        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('You must agree to continue!')),
            },
          ]}
        >
          <Checkbox>
            I agree to the{' '}
            <Link href="#" style={{ color: '#1890ff' }}>
              Privacy Policy
            </Link>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            style={{ 
              backgroundColor: '#1b5e20', 
              borderColor: '#1b5e20',
              width: '100%'
            }}
          >
            Book My Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookAppointmentPage;