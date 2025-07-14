import React from "react";
import { useTranslation } from "react-i18next";
import sakhrLogo from "../assets/sakhr.webp";

const About = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <section
      id="about"
      className="pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-0 container mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-accent drop-shadow-lg">
        {t("about")}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-shrink-0 hidden md:flex justify-center md:justify-start md:mx-auto">
          <img
            src={sakhrLogo}
            alt="Sakhr Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain shadow-lg bg-white dark:bg-gray-800 p-2 "
          />
        </div>
        <div className={`flex-1  text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
          <h3 className="text-3xl font-extrabold mb-2 text-accent drop-shadow-lg">
            {t("about_name")}
          </h3>
          <div className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
            {t("about_title")}
          </div>
          <p className="text-base sm:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed text-gray-800 dark:text-gray-200 mb-4">
            {t("about_content")}
          </p>
          <div className="mb-1 text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{t("location")}:</span> {t("location_value")}
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{t("email")}:</span>{" "}
            <a
              href="mailto:sakr1772007@gmail.com"
              className="underline text-blue-600 dark:text-blue-400">
              {t("email_value")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
