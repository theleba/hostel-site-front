import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Button, Card, Col, Form, Input, InputNumber, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useTranslations } from "next-intl";

function ContactForm() {
  const t = useTranslations();

  return (
    <Form layout="vertical" style={{ maxWidth: 600 }}>
      <FormItem
        name={`name`}
        label={<label className="text-white">{t("name")}</label>}
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
        name={"email"}
        label={<label className="text-white">Whatsapp</label>}
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </FormItem>

      <FormItem
        name={"message"}
        rules={[{ required: true }]}
        label={<label className="text-white">{t("message")}</label>}
      >
        <TextArea />
      </FormItem>
      <FormItem>
        <Button className="bg-[#8C52FF] border-none text-white">
          {t("send")}
        </Button>
      </FormItem>
    </Form>
  );
}

export default ContactForm;
