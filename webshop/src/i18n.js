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
     "sortAZ": "Sort from A-Z",
     "sortZA": "Sort from Z-A",
     "sortPriceAsc": "Price ascending",
     "sortPriceDesc": "Price descending",
     "tents": "Tents",
     "camping-gear": "Camping gear",
     "cars": "Cars",
     "motorcycles": "Motorcycles",
     "add-to-cart": "Add to cart",
     "name": "Name",
     "photo": "Photo",
     "price": "Price",
     "description": "Description",
     "category": "Category",
     "active": "Active",
     "add-new-product": "Add new product",
     "items": "items" ,
     "id": "Id"   ,
     "actions": "Actions", 
     "delete": "Delete",
     "edit": "Edit"  ,
     "shopping-cart-is-empty": "Shopping cart is empty",
     "add-products": "Add products",
     "empty-cart":"Empty cart",
     "remove-item": "Remove item",
     "total": "Total",
     "there-are": "There are",
     "items-in-the-cart": "items in the cart",
     "there-is": "There is",
     "item-in-the-cart": "item in the cart",
     "email": "Email",
     "phone":"Phone",
     "message": "Message",
     "send": "Send",

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
     "sortAZ": "Sorteeri A-Z",
     "sortZA": "Sorteeri Z-A",
     "sortPriceAsc": "Odavamad enne",
     "sortPriceDesc": "Kallimad enne",
     "tents": "Telgid",
     "camping-gear": "Matkatarbed",
     "cars": "Autod",
     "motorcycles": "Mootorrattad",
     "add-to-cart": "Lisa ostukorvi",
     "name": "Nimi",
     "photo": "Pilt",
     "price": "Hind",
     "description": "Kirjeldus",
     "category": "Kategooria",
     "active": "Aktiivne",
     "add-new-product": "Lisa uus toode",
     "items": "tk" ,
     "id": "Tootekood"   ,
     "actions": "Valikud",  
     "delete": "Kustuta",
     "edit": "Muuda"  ,
     "shopping-cart-is-empty":  "Ostukorv on tühi",
     "add-products": "Tooteid lisama",
     "empty-cart": "Tühjenda ostukorv",
     "remove-item": "Eemalda toode",
     "total": "Kokku",
     "items-in-the-cart": "toodet",
     "there-are": "Ostukorvis on",
     "there-is": "Ostukorvis on",
     "item-in-the-cart": " toode",
     "email": "Email",
     "phone":"Number",
     "message": "Sõnum",
     "send": "Saada",

     

         
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
     "sortAZ": "Sortować od A do Z",
     "sortZA": "Sortować od Z do A",
     "sortPriceAsc": "Cena rosnąca",
     "sortPriceDesc": "Cena malejąca",
     "tents": "Namioty",
     "camping-gear": "Sprzęt kempingowy",
     "cars": "Samochody",
     "motorcycles": "Motocykle",
     "add-to-cart": "Dodaj do koszyka",
     "name": "Imię",
     "photo": "Zdjęcie",
     "price": "Cena",
     "description": "Opis",
     "category": "Kategoria",
     "active": "Aktywny",
     "add-new-product": "Dodaj nowy produkt",
     "items": "rzeczy" ,
     "id": "Kod produktu"   ,
     "actions": "Wybory",  
     "delete": "Usuwać",
     "edit": "Edytować"  ,
     "shopping-cart-is-empty":  "Koszyk zakupowy jest pusty",
     "add-products": "Dodawać produkty",
     "empty-cart": "Pusty wózek",
     "remove-item": "Usuń przedmiot",
     "total": "Całkowity",
     "items-in-the-cart": "sztuki",
     "there-are": "W koszyku są",
     "there-is": "W koszyku jest",
     "item-in-the-cart": " pozycja",
     "email": "Email",
     "phone":"Numer telefonu",
     "message": "Wiadomość",
     "send": "Wysłać",
         
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
     "sortAZ": "Sortere fra A til Z",
     "sortZA": "Sortere fra Z til A",
     "sortPriceAsc": "Pris stigende",
     "sortPriceDesc": "Pris synkende",
     "tents": "Telt",
     "camping-gear":"Campingutstyr",
     "cars": "Biler",
     "motorcycles": "Motorsykler",
     "add-to-cart": "Legg i handlekurv",
     "name": "Navn",
     "photo": "Bilde",
     "price": "Pris",
     "description": "Beskrivelse",
     "category": "Kategori",
     "active": "Aktiv",
     "add-new-product": "Legge til nytt produkt",
     "items": "gjenstander" ,
     "id": "Produktkode"   ,
     "actions": "Valg",  
     "delete": "Slette",
     "edit": "Redigere"  ,
     "shopping-cart-is-empty":  "Handlekurven er tom",
     "add-products": "Legge til produkter",
     "empty-cart": "Tom handlevogn",
     "remove-item": "Fjerne gjenstand",
     "total": "Total",
     "items-in-the-cart": "varer i handlekurven",
     "there-are": "Det er",
     "there-is": "Det er",
     "item-in-the-cart": " vare i handlekurven",
     "email": "Email",
     "phone":"Telefonnummer",
     "message": "Beskjed",
     "send": "Sende",
         
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