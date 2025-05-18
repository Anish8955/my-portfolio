import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Evaride Rental Website"
          main="A comprehensive electric vehicle rental platform developed using Laravel, featuring booking, payments, and user management."
        />

        <ProjectCard
          title="AI Clone using Gemini API & React"
          main="An AI-powered application built with React and Gemini API, providing advanced data processing and user interaction capabilities."
        />

        <ProjectCard
          title="Fruitables E-commerce Website"
          main="An e-commerce platform developed using Laravel, enabling seamless online shopping for fresh fruits and groceries."
        />
      </div>
    </div>
  );
};
export default Projects;
