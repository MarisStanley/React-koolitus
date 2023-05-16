import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
     "admin": "To admin view",
     "contact": "Contact us",
     "shops": "Our shops",
     "cart": "Cart",
     "maintain-categories": "Maintain categories",
     "maintain-shops": "Maintain shops",
     "add-product": "Add product",
     "maintain-products": "Maintain products" ,
      

    }
  },
  ee: {
    translation: {
     "admin": "Admin vaade",
     "contact": "Kontakt",
     "shops": "Poed",
     "cart": "Ostukorv",
     "maintain-categories": "Halda kategooriaid",
     "maintain-shops": "Halda poode",
     "add-product": "Lisa toode",
     "maintain-products": "Halda tooteid",
         
    }
  },

  pl: {
    translation: {
     "admin": "Admin",
     "contact": "Kontakt",
     "shops": "Sklepy",
     "cart": "Kozyk",
     "maintain-categories": "Utrzymywać kategorie",
     "maintain-shops": "Utrzymywać sklepy",
     "add-product": "Dodaj produkt",
     "maintain-products": "Konserwować produkty",
         
    }
  },

  no: {
    translation: {
     "admin": "Admin",
     "contact": "Kontakt",
     "shops": "Butikker",
     "cart": "Handlekurven",
     "maintain-categories": "Opprettholde kategorier",
     "maintain-shops": "Vedlikeholde butikker",
     "add-product": "Legg til produkt",
     "maintain-products": "Vedlikeholde produkter",
         
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;