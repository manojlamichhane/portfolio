import profile from "./../../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { SelectedPage, componentsProp } from "../../constants/type";
import CV from "../../assets/Manoj Lamichhane.pdf";

const AboutMe = ({ setSelectedPage }: componentsProp) => {
  const scrollHandler = (value: SelectedPage) => {
    setSelectedPage(value);
    const nextSection = document.getElementById(value);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <section id="aboutme" className="hero min-h-screen pt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
        className="hero-content flex-col lg:flex-row"
      >
        <div className="px-20">
          <span className="text-3xl">
            Hi,{" "}
            <TypeAnimation
              sequence={[
                "I am Manoj Lamichhane",
                1000,
                "I am a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>

          <p className="py-6">
            Hi I am a web developer interested in ReactJS, NextJS, NodeJS,
            ExpressJS and SpringBoot
          </p>
          <button
            onClick={() => scrollHandler(SelectedPage.ContactMe)}
            className="btn bg-green-500 text-white"
          >
            Learn More
          </button>
          <button onClick={handleModal} className="btn bg-green-500 text-white">
            See Resume
          </button>

          <dialog id="my_modal_1" className="modal ">
            <div className="modal-box p-0 w-full h-full">
              <iframe
                src={CV}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </dialog>
        </div>

        <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
