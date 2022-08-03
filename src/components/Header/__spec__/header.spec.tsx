import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider, LOCALES } from "../../../i18n";

afterEach(() => {
  cleanup();
});

test("should render wrapper", () => {
  const setModalActive = jest.fn();
  const setIsDarkThemeOff = jest.fn();
  const isDarkThemeOff = false;
  const setLocale = jest.fn();
  const locale = "MAIN";

  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Header
          setModalActive={setModalActive}
          setIsDarkThemeOff={setIsDarkThemeOff}
          isDarkThemeOff={isDarkThemeOff}
          setLocale={setLocale}
          locale={locale}
        />
      </BrowserRouter>
    </I18nProvider>
  );
  const headerElement = screen.getByTestId("header-wrapper");

  expect(headerElement).toBeInTheDocument();
});

test("should render storage", () => {
  const setModalActive = jest.fn();
  const setIsDarkThemeOff = jest.fn();
  const isDarkThemeOff = false;
  const setLocale = jest.fn();
  const locale = "MAIN";

  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Header
          setModalActive={setModalActive}
          setIsDarkThemeOff={setIsDarkThemeOff}
          isDarkThemeOff={isDarkThemeOff}
          setLocale={setLocale}
          locale={locale}
        />
      </BrowserRouter>
    </I18nProvider>
  );
  const headerElement = screen.getByTestId("header-storage");
  expect(headerElement).toBeInTheDocument();
});
