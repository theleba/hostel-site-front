import { Col, Dropdown, MenuProps, Row } from "antd";
import Image from "next/image";
import { arsenal } from "../fonts";
import { FaBars } from "react-icons/fa6";
import BorderButton from "./Buttons/BorderButton";
import FullColorButton from "./Buttons/FullColorButton";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const t = useTranslations();

  const header = [
    {
      title: t("acommodations"),
      url: "#acommodations",
      key: "acommodations",
    },
    {
      title: t("we_offer"),
      url: "#we_offer",
      key: "we_offer",
    },
    {
      title: t("contact"),
      url: "#contact",
      key: "contact",
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: t("acommodations"),
      key: "1",
    },
    {
      label: t("we_offer"),
      key: "2",
    },
    {
      label: t("contact"),
      key: "3",
    },
  ];

  return (
    <Row className={`${arsenal.className}`}>
      <Col xs={20} md={6} lg={14} className="relative">
        <div className="absolute left-[35px] top-[40px] md:top-[45px]">
          <Image
            src={"/images/logo.svg"}
            alt={"Logo"}
            width={200}
            height={55}
          />
        </div>
      </Col>
      <Col xs={4} className="mt-10 block md:hidden">
        <Dropdown className=" text-black" menu={{ items }} trigger={["click"]}>
          <a>
            <FaBars className=" text-white text-[20px] " />
          </a>
        </Dropdown>
      </Col>
      <Col
        xs={24}
        md={18}
        lg={8}
        className={`${arsenal.className} hidden md:block`}
      >
        <Row gutter={8} className="relative ">
          {header.map((item, index) => {
            return (
              <Col
                md={7}
                className={`${arsenal.className} mt-[48px] cursor-pointer text-center text-white font-bold text-[16px]`}
                key={index}
              >
                <a href={item.url}>{item.title}</a>
              </Col>
            );
          })}
          <Col
            md={3}
            className={`${arsenal.className} mt-[48px] cursor-pointer text-center text-white font-bold text-[16px]`}
          >
            <LanguageSwitcher />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
