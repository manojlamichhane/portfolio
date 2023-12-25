import badge from "../../assets/aws-ccp.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

import { languages } from "./languages";
import { SelectedPage, componentsProp } from "../../constants/type";
import { motion } from "framer-motion";

const Skills = ({ setSelectedPage }: componentsProp) => {
  return (
    <section
      id="skills"
      className="p-20 w-full gap-10 items-center justify-center flex flex-col"
    >
      <span className="text-3xl">Skills</span>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        className="rounded-box gap-6 flex flex-wrap"
      >
        <div className="grid p-2 flex-grow card bg-base-300 w-80 rounded-box place-items-center">
          <span className="text-3xl">Laguages</span>
          {languages.map((language) => {
            return (
              <div key={language.id}>
                <p>{language.title} </p>
                <progress
                  className="progress progress-success w-72 m-2"
                  value={language.value}
                  max="100"
                ></progress>
              </div>
            );
          })}
        </div>

        <div className="grid p-2 flex-grow card bg-base-300 w-80 rounded-box place-items-center">
          <span className="text-3xl flex ">Library / Frameworks</span>
          <div className="flex flex-wrap gap-5 h-60">
            <FaReact className="text-6xl" />
            <SiNextdotjs className="text-6xl" />
            <FaNodeJs className="text-6xl" />
            <SiExpress className="text-6xl" />
            <SiSpringboot className="text-6xl" />
            <SiTailwindcss className="text-6xl" />
          </div>
        </div>

        <div className="grid p-2 flex-grow card bg-base-300  w-80 rounded-box place-items-center">
          <span className="text-3xl flex ">Certificates</span>
          <div className="h-60">
            <img src={badge} alt="aws-ccp" className="h-20 w-20 rounded-md" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
