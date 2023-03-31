/* import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../lang/es.json";
import English from "../lang/en.json";
import Portugues from "../lang/pt-BR.json";



export const I18NContext = createContext();

const local = navigator.language;

var lang;
if (local === "en") {
  lang = English;
} else {
  if (local ==="es") {
    lang = Spanish;
  } else {
    lang = Portugues;
  }
}


const I18NProvider = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "es") {
        setMessages(Spanish);
      } else {
        setMessages(Portugues);
      }
      }
    }

    
  return (
    <I18NContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </I18NContext.Provider>
  );
};
export default I18NProvider; */
