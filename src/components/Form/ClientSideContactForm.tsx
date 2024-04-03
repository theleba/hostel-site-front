"use client";
import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Button, Card, Col, Form, Input, InputNumber, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

interface labelsProps {
  labels: {
    name: string;
    message: string;
    send: string;
  };
  onSubmit?: () => void;
}
function ClientSideForm({ labels, onSubmit }: labelsProps) {
  return (
    <Form layout="vertical" style={{ maxWidth: 600 }} onFinish={onSubmit}>
      <FormItem
        name={`name`}
        label={<label className="text-white">{labels.name}</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name={"email"}
        label={<label className="text-white">E-mail</label>}
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name={"whatsapp"}
        label={<label className="text-white">Whatsapp</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </FormItem>

      <FormItem
        name={"message"}
        rules={[{ required: true }]}
        label={<label className="text-white">{labels.message}</label>}
      >
        <TextArea />
      </FormItem>
      <FormItem>
        <Button
          className="bg-[#8C52FF] border-none text-white"
          htmlType="submit"
        >
          {labels.send}
        </Button>
      </FormItem>
    </Form>
  );
}

export default ClientSideForm;
