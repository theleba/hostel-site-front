import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NavigateButton from "../components/test";
import Header from "../components/Header";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden ">
      <h1 className="text-white">soi leticia</h1>
      <Header />
    </main>
  );
}
