export type Locale = 'en' | 'es';

import enDictionary from '../../dictionaries/en-US.json';
import esDictionary from '../../dictionaries/es-ES.json';

const dictionaries: Record<Locale, Record<string, any>> = {
  'en': enDictionary,
  'es': esDictionary
};

export const getDictionary = (locale: Locale): Record<string, any> => {
  if (locale in dictionaries) {
    return dictionaries[locale];
  } else {
    console.error(`Dictionary for locale ${locale} not found`);
    return dictionaries['en'];
  }
};