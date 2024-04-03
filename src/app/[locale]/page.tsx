import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./../../components/Sections/Hero"), {
  ssr: false,
});

const SecondSection = dynamic(
  () => import("./../../components/Sections/SecondSection"),
  {
    ssr: false,
  },
);

const Acommodations = dynamic(
  () => import("./../../components/Sections/Acommodations"),
  {
    ssr: false,
  },
);

const WeCanOffer = dynamic(
  () => import("./../../components/Sections/WeCanOffer"),
  {
    ssr: false,
  },
);

const Footer = dynamic(() => import("./../../components/Footer"), {
  ssr: false,
});

const Contact = dynamic(() => import("./../../components/Sections/Contact"), {
  ssr: false,
});
// Definir uma interface para os parâmetros, incluindo 'locale'
interface Params {
  locale: string;
}

// Definir a tipagem para as props
interface IndexProps {
  params: Params;
}

export default function Index({ params: { locale } }: IndexProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden ">
      <Hero />
      <SecondSection />
      <Acommodations />
      <WeCanOffer />
      <Contact />
      <Footer />
    </main>
  );
}
