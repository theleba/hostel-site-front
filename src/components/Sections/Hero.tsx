import { arsenal } from "@/fonts";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
const Header = dynamic(() => import("./../../components/Header"), {
  ssr: false,
});
const FullColorButton = dynamic(() => import("../Buttons/FullColorButton"), {
  ssr: false,
});

function Hero() {
  const t = useTranslations();
  return (
    <Row className="min-h-[80vh] md:min-h-[90vh]">
      <video className="hidden md:block" autoPlay muted loop id="bg_video">
        <source src="/videos/bg_video.mp4" type="video/mp4" />
      </video>
      <video className="block md:hidden" autoPlay muted loop id="bg_video">
        <source src="/videos/bg_video_mobile.mp4" type="video/mp4" />
      </video>
      <Col xs={24} className={`md:min-h-[800px]`}>
        <Header />

        <Row gutter={20} className="relative justify-center">
          <Col
            xs={24}
            md={12}
            lg={8}
            className={` ${arsenal.className} top-[15vh] md:top-[30vh]  `}
          >
            <h1 className=" text-white pl-5 text-[35px] md:text-[40px] md:pl-10">
              <span className="typing-effect" data-text="{t('hero_phrase')}">
                {t("hero_phrase")}
              </span>
              <br />
              <span
                className="typing-effect delayed font-bold italic"
                data-text="{t('hero_phrase_highlight')}"
              >
                {t("hero_phrase_highlight")}
              </span>
            </h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Hero;
