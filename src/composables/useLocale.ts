export enum Locale {
  ru = "ru",
  en = "en",
}

export const useLocale = () => useState<Locale>("locale", () => Locale.ru);
