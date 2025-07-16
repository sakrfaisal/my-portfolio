import React from "react";
import { useTranslation } from "react-i18next";
import sakhrLogo from "../assets/sakhr.webp";

const About = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <section
      id="about"
      className=" py-18 px-4 sm:px-8 md:px-16 lg:px-0 container mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-2 text-center text-gradient drop-shadow-lg">
        {t("about")}
      </h2>
      <p className="text-center mb-14 text-muted-foreground">{t("about_subtitle")}</p>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="flex-shrink-0 hidden md:flex justify-center md:justify-start md:mx-auto">
          <img
            src={sakhrLogo}
            alt="Sakhr Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain shadow-lg bg-background p-2 "
          />
        </div>
        <div className={`flex-1  text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
          <h3 className="text-3xl font-extrabold mb-2 text-gradient drop-shadow-lg">
            {t("about_name")}
          </h3>
          <div className="text-xl font-semibold text-foreground mb-2">{t("about_title")}</div>
          <p className="max-w-2xl mx-auto md:mx-0 leading-relaxed font-semibold text-muted-foreground mb-4">
            {t("about_content")}
          </p>
          <div className="mb-1 text-muted-foreground">
            <span className="font-semibold">{t("location")}:</span> {t("location_value")}
          </div>
          <div className="text-muted-foreground font-semibold">
            <span>{t("email")}:</span>
            <a href="mailto:sakr1772007@gmail.com" className="underline text-primary">
              {" "}
              {t("email_value")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
