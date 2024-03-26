import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Card, Col, Row } from "antd";
import { useTranslations } from "next-intl";

function SecondSection() {
  const t = useTranslations();

  return (
    <Row className="min-h-[500px] relative justify-center">
      <Col
        className={` ${arsenal_bold_italic.className} flex  items-center bg-[#47E18E]`}
        xs={24}
        md={6}
      >
        <h2 className="text-[40px] italic font-bold text-[#8C52FF] pl-10 md:pl-7">
          {t("acommodation_cta_phrase")}
        </h2>
      </Col>
      <Col className="bg-[#6AA485]" xs={24} md={18}>
        <Row gutter={20} className="p-10 mt-10">
          <Col xs={24} md={8}>
            <Card className="h-[350px] w-[250px] border-none bg-[url('/images/adventures/1.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal.className} text-[16px] font-bold text-white w-[250px]`}
            >
              {t("live_with_people")}
            </h4>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-[350px] w-[250px] border-none bg-[url('/images/adventures/2.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal.className} text-[16px] font-bold text-white w-[250px]`}
            >
              {t("use_our_equipment")}
            </h4>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-[350px] w-[250px] border-none bg-[url('/images/adventures/3.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal.className}  text-[16px] font-bold text-white w-[250px]`}
            >
              {t("enjoy_the_sunset")}
            </h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SecondSection;
