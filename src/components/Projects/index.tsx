import ProjectCard from "../ProjectCard";
import projects from "./Projects";
import { SelectedPage, componentsProp } from "../../constants/type";
import { motion } from "framer-motion";

const Projects = ({ setSelectedPage }: componentsProp) => {
  return (
    <section
      id="projects"
      className=" p-20 w-full gap-10 items-center justify-center flex flex-col"
    >
      <span className="text-3xl">Projects</span>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className="flex flex-wrap gap-6"
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
