import { arsenal, arsenal_bold_italic } from "@/fonts";
import { Card, Col, Row } from "antd";
import { useTranslations } from "next-intl";

function WeCanOffer() {
  const t = useTranslations();

  return (
    <Row
      className="min-h-[500px] bg-[#F9F7F0] relative justify-center"
      id="we_offer"
    >
      <Col xs={24} className="text-center mt-10">
        <span className={`${arsenal.className} text-[36px]`}>
          {t("what_we")}{" "}
        </span>
        <span
          className={`${arsenal_bold_italic.className} text-[#47E18E] text-[36px]`}
        >
          {t("can_offer")}
        </span>
      </Col>

      <Col xs={24}>
        <Row className="justify-center">
          <Col xs={24} md={6} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/offer/1.png')] bg-center bg-cover">
              <h4
                className={`${arsenal.className} drop-shadow absolute bottom-5 text-[20px] text-[white]`}
              >
                {t("surf_lessons")}
              </h4>
            </Card>
          </Col>
          <Col xs={24} md={6} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/offer/2.png')] bg-center bg-cover">
              <h4
                className={`${arsenal.className} drop-shadow absolute bottom-5 text-[20px] text-[white]`}
              >
                {t("certified_instructors")}
              </h4>
            </Card>
          </Col>
          <Col xs={24} md={6} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/offer/3.png')] bg-center bg-cover">
              <h4
                className={`${arsenal.className} drop-shadow absolute bottom-5 text-[20px] text-[white]`}
              >
                {t("breakfast")}
              </h4>
            </Card>
          </Col>
          <Col xs={24} md={6} className="grid justify-center">
            <Card className="h-[250px] w-[250px] border-none bg-[url('/images/offer/4.png')] bg-center bg-cover">
              <h4
                className={`${arsenal.className} drop-shadow absolute bottom-5 text-[20px] text-[white]`}
              >
                {t("transfers")}
              </h4>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default WeCanOffer;
