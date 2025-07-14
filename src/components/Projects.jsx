import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("project_list", { returnObjects: true });

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-4 container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-accent drop-shadow-lg">
        {t("projects")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const imagePath = `/src/assets/${project.name}.webp`;
          const liveDemo = `https://sakrfaisal.github.io/${project.name}`;
          return (
            <div
              key={project.name}
              className={`card block rounded-lg shadow transition-all duration-500 group hover:shadow-2xl overflow-hidden`}
              style={{ transitionProperty: "opacity, transform, box-shadow, border" }}>
              <img
                src={imagePath}
                alt={project.name + " screenshot"}
                width={300}
                height={300}
                className="w-auto object-contain border-b border-gray-200 dark:border-gray-700"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="flex flex-col justify-between gap-3 p-4">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </span>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm font-semibold text-gray-900 dark:text-white hover:bg-green-200 dark:hover:bg-green-600 transition-colors">
                    GitHub
                  </a>
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-accent text-sm font-semibold text-accent dark:text-green-900 hover:bg-green-300 transition-colors">
                    Live Demo
                  </a>
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
          className="mt-8 px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-lg font-semibold text-gray-900 dark:text-white shadow hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
          {t("view_all_projects")}
        </a>
      </div>
    </section>
  );
};

export default Projects;
