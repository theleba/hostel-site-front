import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Card, Col, Row } from "antd";
import { useTranslations } from "next-intl";

function Acommodations() {
  const t = useTranslations();

  return (
    <Row
      className="min-h-[500px] bg-[#F9F7F0] relative justify-center"
      id="acommodations"
    >
      <Col xs={24} className="text-center mt-10">
        <span className={`${arsenal.className} text-[36px]`}>{t("our")} </span>
        <span
          className={`${arsenal_bold_italic.className} text-[#8C52FF] text-[36px]`}
        >
          {t("acommodations")}
        </span>
      </Col>

      <Col xs={24}>
        <Row className="justify-center">
          <Col xs={24} md={8} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/acommodations/1.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal_bold_italic.className} text-[20px] text-[#47E18E]`}
            >
              {t("private_room")}
            </h4>
          </Col>
          <Col xs={24} md={8} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/acommodations/2.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal_bold_italic.className} text-[20px] text-[#47E18E]`}
            >
              {t("four_room")}
            </h4>{" "}
          </Col>
          <Col xs={24} md={8} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/acommodations/3.png')] bg-center bg-cover" />
            <h4
              className={`${arsenal_bold_italic.className} text-[20px] text-[#47E18E]`}
            >
              {t("eight_room")}
            </h4>{" "}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Acommodations;
