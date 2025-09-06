import { useTranslation } from "react-i18next";
import spaceTourism from "../assets/space-tourism-website.webp";
import urlShortener from "../assets/url-shortener-landing-page.webp";
import teamPortfolio from "../assets/team-portfolio.webp";
import dashboard from "../assets/dashboard.webp";
import browserExtension from "../assets/browser-extension-manager-ui.webp";
import productListWithCart from "../assets/product-list-with-cart-main.webp";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("project_list", { returnObjects: true });

  const imageMap = {
    "space-tourism-website": spaceTourism,
    "url-shortener-landing-page": urlShortener,
    "team-portfolio": teamPortfolio,
    dashboard: dashboard,
    "browser-extension-manager-ui": browserExtension,
    "product-list-with-cart-main": productListWithCart,
  };

  return (
    <section id="projects" className="py-18 px-4 container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold mb-2 text-center text-gradient drop-shadow-lg">
        {t("projects")}
      </h2>
      <p className="text-center mb-14 text-muted-foreground">{t("projects_subtitle")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const imagePath = imageMap[project.name];
          const liveDemo = `https://sakrfaisal.github.io/${project.name}`;
          return (
            <div data-aos="fade-up" key={project.name}>
              <div
                key={project.name}
                className="card project-card block rounded-lg shadow overflow-hidden border h-full">
                <img
                  src={imagePath}
                  alt={project.name + " screenshot"}
                  width={300}
                  height={300}
                  className="w-auto object-contain border-b border-border transition-all duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="flex flex-col justify-between gap-3 p-4">
                  <div className="flex items-center gap-2">
                    <h3 className="grow text-xl font-semibold text-foreground">{project.name}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View project"
                      title="View project"
                      className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold transition-all">
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
                        className="w-4 h-4">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                      title="View live demo"
                      className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold transition-all">
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
                        className="w-4 h-4">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 overflow-x-auto">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/sakrfaisal?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center mt-8 px-6 py-2 text-xs font-semibold rounded-sm bg-transparent hover:bg-secondary text-secondary-foreground shadow border border-border transition-colors">
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
            className="w-4 h-4">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          {t("view_all_projects")}
        </a>
      </div>
    </section>
  );
};

export default Projects;
