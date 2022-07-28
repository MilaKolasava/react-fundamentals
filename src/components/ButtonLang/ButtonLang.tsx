import React from "react";
import { LOCALES } from "../../i18n";
import "./ButtonLang.css";

interface ButtonsLangProps {
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  locale: string;
}

function ButtonLang(props: ButtonsLangProps) {
  return (
    <>
      <div
        className={`button-change button-change-en ${
          props.locale === LOCALES.ENGLISH ? "active" : ""
        }`}
        onClick={() => props.setLocale(LOCALES.ENGLISH)}
        data-testid="button-en"
      >
        EN
      </div>
      <div
        className={`button-change button-change-by ${
          props.locale === LOCALES.BELARUSIAN ? "active" : ""
        }`}
        onClick={() => props.setLocale(LOCALES.BELARUSIAN)}
        data-testid="button-by"
      >
        BY
      </div>
      <div
        className={`button-change button-change-pl ${
          props.locale === LOCALES.POLISH ? "active" : ""
        }`}
        onClick={() => props.setLocale(LOCALES.POLISH)}
        data-testid="button-pl"
      >
        PL
      </div>
    </>
  );
}

export default ButtonLang;
