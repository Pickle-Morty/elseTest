import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../constants/translations/translations";



i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
