import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';
import {en} from './en';
import {de} from './de';

const translations = {
  en,
  de,
};

export default new LocalizedStrings(translations);
