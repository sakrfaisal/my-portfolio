import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="snap-start flex flex-col items-center justify-center text-center py-24 px-4 sm:px-8 md:px-16 lg:px-0 min-h-[60vh] animate-fadein">
      <span data-aos="zoom-in" className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-2">
        {t("hero_greeting")}
      </span>
      <div
        data-aos="fade-left"
        className="flex items-center justify-center mb-4 bg-green-400 dark:bg-green-800 w-30 h-30 rounded-full shadow-lg overflow-hidden ">
        <img
          src="/src/assets/sakhr.webp"
          alt="sakr"
          width="164"
          height="203"
          className="w-40 h-40 rounded-full object-contain shadow-lg bg-white dark:bg-gray-800 p-2"
        />
      </div>
      <h1
        data-aos="fade-right"
        className="text-5xl sm:text-6xl font-extrabold mb-4 text-accent drop-shadow-lg">
        {t("hero_name")}
      </h1>
      <p
        data-aos="fade-right"
        className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-200">
        {t("hero_tagline")}
      </p>
      <div data-aos="fade-right" className="flex gap-6 justify-center mb-8">
        <a
          href="https://github.com/sakrfaisal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-green-700 dark:hover:text-green-300 text-3xl transition-colors"
          aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/%D8%B5%D8%AE%D8%B1-%D9%81%D9%8A%D8%B5%D9%84-%D8%A7%D9%84%D9%87%D8%AA%D8%A7%D8%B1-865145270"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-green-700 dark:hover:text-green-300 text-3xl transition-colors"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-accent hover:text-green-700 dark:hover:text-green-300 text-3xl transition-colors"
          aria-label="Twitter (coming soon)">
          <FaTwitter />
        </a>
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href="https://wa.me/966533246842"
          data-aos="fade-right"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500 text-lg font-semibold text-white shadow hover:bg-green-600 transition-colors">
          <FaWhatsapp className="text-2xl" />
          {t("lets_talk")}
        </a>
        <a
          href="#projects"
          data-aos="fade-right"
          className="inline-block px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-lg font-semibold text-gray-900 dark:text-white shadow hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
          {t("view_all_projects")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
