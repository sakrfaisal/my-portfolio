import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const RootApp = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default RootApp;
