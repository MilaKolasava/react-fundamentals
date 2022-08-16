import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import ThemeContext from "./components/ThemeContext/ThemeContext";
import Weather from "./components/Weather/Weather";
import { I18nProvider, LOCALES } from "./i18n";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);
  const [locale, setLocale] = useState<string>(() => LOCALES.ENGLISH);

  const { isDarkThemeOff, setIsDarkThemeOff } = useContext(ThemeContext);

  return (
    <I18nProvider locale={locale}>
      <Header
        setModalActive={setModalActive}
        setIsDarkThemeOff={setIsDarkThemeOff}
        isDarkThemeOff={isDarkThemeOff}
        setLocale={setLocale}
        locale={locale}
      />
      <Weather />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Jumbotron />} />
      </Routes>
      <Footer
        setIsDarkThemeOff={setIsDarkThemeOff}
        isDarkThemeOff={isDarkThemeOff}
      />
    </I18nProvider>
  );
}

export default App;
