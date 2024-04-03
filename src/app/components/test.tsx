// Em algum componente React
import { useTranslation } from '../hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t('welcome_message')}</h1>;
};

export default MyComponent;