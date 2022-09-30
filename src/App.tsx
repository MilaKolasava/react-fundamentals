import React, { useState } from "react";
import message from "react-intl/src/components/message";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CityWeather from "./components/CityWeather/CityWeather";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Weather from "./components/Weather/Weather";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock";
import { I18nProvider, LOCALES } from "./i18n";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);
  const [locale, setLocale] = useState<string>(() => LOCALES.ENGLISH);

  return (
    <I18nProvider locale={locale}>
      <Header
        setModalActive={setModalActive}
        setLocale={setLocale}
        locale={locale}
      />
      <WeatherBlock />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Jumbotron />} />
      </Routes>
      <Footer />
    </I18nProvider>
  );
}

export default App;
