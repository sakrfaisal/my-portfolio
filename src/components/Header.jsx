import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const getInitialDarkMode = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = () => {
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language === "en";
  const toggleLanguage = () => {
    const newLang = isEnglish ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Dark mode
  const [dark, setDark] = useState(getInitialDarkMode);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  const toggleDark = () => setDark((d) => !d);

  // Mobile nav
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop - 80 : 0;
      });
      const scroll = window.scrollY;
      let idx = 0;
      for (let i = 0; i < offsets.length; i++) {
        if (scroll >= offsets[i]) idx = i;
      }
      setActive(NAV_LINKS[idx].id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoText = "</>";

  const darkModeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );

  const lightModeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );

  return (
    <>
      <header
        data-aos="fade-down"
        className="fixed left-1/2 -translate-x-1/2 mt-4 top-0 z-50 w-[95vw] max-w-5xl rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg border-none dark:border dark:border-border backdrop-blur flex items-center justify-between px-6 transition-all">
        <div className="container flex items-center justify-between h-12 mx-auto px-0">
          <span className="font-bold text-xl text-black dark:text-white">{logoText}</span>
          <nav className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-base font-medium transition-colors px-2 py-1 rounded ${
                  active === link.id
                    ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-black"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}>
                {t(link.label)}
              </a>
            ))}
          </nav>
          <div className="flex gap-2 items-center">
            <button
              onClick={toggleLanguage}
              className="p-3 rounded text-xs text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              {isEnglish ? "AR" : "EN"}
            </button>
            <button
              onClick={toggleDark}
              className="p-3 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-700">
              {dark ? darkModeIcon : lightModeIcon}
            </button>
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 ml-2"
              onClick={() => setNavOpen((o) => !o)}
              aria-label="Toggle navigation">
              <span
                className={`block w-6 h-0.5  bg-gray-500 mb-1 transition-transform ${
                  navOpen ? "rotate-45 translate-y-1.5" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5  bg-gray-500 mb-1 ${
                  navOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`block w-6 h-0.5  bg-gray-500 transition-transform ${
                  navOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}></span>
            </button>
          </div>
        </div>
      </header>
      {navOpen && (
        <nav className="fixed left-1/2 -translate-x-1/2 top-[5.5rem] z-40 w-[90vw] max-w-3xl rounded-2xl bg-white/95 dark:bg-gray-900/95 shadow-lg border dark:border-border px-4 py-6 flex flex-col gap-2 md:hidden animate-fadein">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-lg font-semibold transition-colors px-2 py-3 rounded text-center ${
                active === link.id
                  ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-black"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setNavOpen(false)}>
              {t(link.label)}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;
