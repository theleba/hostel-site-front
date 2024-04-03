
'use client'
import { useRouter } from 'next/router';

// Importe seus arquivos de tradução
import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';

// Defina um tipo que mapeia os códigos dos idiomas às suas traduções
type Translations = {
    [key: string]: Record<string, string>; // Ou um tipo mais específico se você tiver uma estrutura definida para seus arquivos de tradução
};

const translations: Translations = { en, es, pt };

export function useTranslation() {
    const router = useRouter();
    const { locale } = router;

    const t = (key: string): string => {
        const currentTranslations = translations[locale || 'en']; // Fallback para 'en' se locale for undefined
        return currentTranslations[key] || key;
    };

    return { t, locale };
}
