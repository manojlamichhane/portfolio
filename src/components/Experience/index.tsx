import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "./experience";
import { SelectedPage, componentsProp } from "../../constants/type";
import { motion } from "framer-motion";

const Experience = ({ setSelectedPage }: componentsProp) => {
  return (
    <motion.section
      id="experience"
      onViewportEnter={() => {
        console.log("new section");
        setSelectedPage(SelectedPage.Experience);
      }}
      className="p-20 w-full gap-10 items-center justify-center flex flex-col"
    >
      <span className="text-3xl">Experience</span>

      <VerticalTimeline>
        {experience.map((item) => {
          return (
            <VerticalTimelineElement
              key={item.id}
              className=" rounded-box "
              contentStyle={{
                background: "rgb(229,230,230)",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(229,230,230)",
              }}
              date={item.time}
              iconStyle={{ background: "rgb(67,206,118)", color: "#fff" }}
              icon={<item.icon />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
