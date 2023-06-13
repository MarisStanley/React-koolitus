import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "sortAZ": "Sort from A-Z",
     "sortZA": "Sort from Z-A",
     "sortPriceAsc": "Price ascending",
     "sortPriceDesc": "Price descending",
     "contact": "Contact",
     "shop": "Shop",
     "cart": "Cart",
     "home": "Home",
     "login": "Log in",
     "about": "About",
     "bikini": "Bikini",
     "hat": "Hat",
     "sunglasses": "Sunglasses",
     "hats": "Hats",
     "glasses": "Glasses",
     "swimwear": "Swimwear",
     "product-id": "Product ID",
     "price": "Price",
     "size": "Size",
     "color": "Color",
     "select-size": "Select size",
     "select-price": "Select price",
     "white": "White",
     "multi-color": "Multi color",
     "brown": "Brown",
     "camel": "Camel",
     "black": "Black",
     "product-not-found": "Product not found",
     "add-to-cart": "Add to cart",
     "shopping-cart-is-empty": "Shopping cart is empty",
     "add-products": "Add products",
     "empty-cart": "Empty cart",
     "continue": "Continue",
     "there-are": "There are",
     "items-in-the-cart": "items in the cart",
     "there-is": "There is",
     "item-in-the-cart": "item in the cart",
     "email": "Email",
     "phone":"Phone",
     "message": "Message",
     "send": "Send",
     "remove-item": "Remove item",
     "total": "Total",
    }
  },
  ee: {
    translation: {
      "contact": "Kontakt",
      "sortAZ": "Sorteeri A-Z",
     "sortZA": "Sorteeri Z-A",
     "sortPriceAsc": "Odavamad enne",
     "sortPriceDesc": "Kallimad enne",
     "shop": "Pood",
     "cart": "Ostukorv",
     "home": "Esileht",
     "login": "Logi sisse",
     "about": "Meist",
     "bikini": "Bikiinid",
     "hat": "Müts",
     "sunglasses": "Päikeseprillid",
     "hats": "Mütsid",
     "glasses": "Prillid",
     "swimwear": "Ujumisriided",
     "product-id": "Tootekood",
     "price": "Hind",
     "size": "Suurus",
     "color": "Värv",
     "select-size": "Vali suurus",
     "select-color": "Vali värv",
     "white": "Valge",
     "multi-color": "Mitmevärviline",
     "brown": "Pruun",
     "camel": "Helepruun",
     "black": "Must",
     "product-not-found": "Toodet ei leitud",
     "add-to-cart": "Lisa ostukorvi",
     "shopping-cart-is-empty": "Ostukorv on tühi",
     "add-products": "Tooteid lisama",
     "empty-cart": "Tühjenda ostukorv",
     "continue": "Jätka",
     "items-in-the-cart": "toodet",
     "there-are": "Ostukorvis on",
     "there-is": "Ostukorvis on",
     "item-in-the-cart": " toode",
     "email": "Email",
     "phone":"Number",
     "message": "Sõnum",
     "send": "Saada",
     "remove-item": "Eemalda toode",
     "total": "Kokku",

  

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;