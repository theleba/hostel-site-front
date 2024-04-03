import { useTranslations } from "next-intl";
import ClientSideForm from "./ClientSideContactForm";

function ContactForm() {
  const t = useTranslations();

  return (
    <div>
      {/* Outros componentes do lado do servidor, se necessário */}
      <ClientSideForm
        labels={{
          name: t("name"),
          message: t("message"),
          send: t("send"),
          success: t("message_success"),
        }}
      />
    </div>
  );
}

export default ContactForm;
