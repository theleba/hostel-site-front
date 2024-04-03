import { Col, Dropdown, Row } from "antd";
import Image from "next/image";
import { arsenal, arsenal_bold_italic } from "../fonts";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();

  return (
    <Row
      className={`${arsenal.className} pt-5 bg-[#F9F7F0] min-h-[100px] text-[#8C52FF]`}
    >
      <Col xs={24} md={12} className="">
        <div className="absolute md:left-[35px]">
          <Image
            src={"/images/logo-color.svg"}
            alt={"Logo"}
            width={150}
            height={55}
          />
        </div>
      </Col>
      <Col
        xs={24}
        md={12}
        className={` ${arsenal_bold_italic.className} text-center md:text-right md:pr-10`}
      >
        * {t("unreal_company")}
      </Col>
    </Row>
  );
}

export default Footer;
