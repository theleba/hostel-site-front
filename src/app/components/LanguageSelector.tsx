'use client'
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push('/', '/', { locale });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
};

export default LanguageSwitcher;
