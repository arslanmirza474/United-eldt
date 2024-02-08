import { useEffect } from 'react';
import i18n from './i18n'; // Import the initialized i18n instance

function LanguageListener() {
  useEffect(() => {
    // Always change the language to English ('en')
    i18n.changeLanguage('en');
  }, []);

  return null;
}

export default LanguageListener;
