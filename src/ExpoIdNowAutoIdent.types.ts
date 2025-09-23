export type IdentificationResult = {
  type: 'finished';
} | {
  type: 'error';
  /** @see https://github.com/idnow/de.idnow.ios.sdk.spm?tab=readme-ov-file#sdk-error-codes */
  errorCode: string;
} | {
  type: 'cancelled';
};

export type LanguageCode = 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'hr' | 'hu' | 'it' | 'ja' | 'ka' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'zh';
