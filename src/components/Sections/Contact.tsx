import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Button, Card, Col, Form, Input, InputNumber, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useTranslations } from "next-intl";
import ContactForm from "../Form/ContactForm";

function Contact() {
  const t = useTranslations();

  async function onFinish() {}
  return (
    <Row
      className="min-h-[600px] bg-[url('/images/sea.png')] bg-center relative justify-center"
      id="contact"
    >
      <Col xs={24} md={8} className="text-left mt-10">
        <Card className="bg-[#47E18E33] border-none">
          <ContactForm />
        </Card>
      </Col>
      <Col
        xs={24}
        md={10}
        className="flex text-center justify-center items-center mt-10 align-middle"
      >
        <h2
          className={` ${arsenal_bold_italic.className} drop-shadow text-[50px] text-white  md:pl-7`}
        >
          {t("contact_phrase")}
        </h2>
      </Col>
    </Row>
  );
}

export default Contact;
