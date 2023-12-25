import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { ImSpinner8 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { SelectedPage, componentsProp } from "../../constants/type";
import { motion } from "framer-motion";

type Inputs = {
  Name: string;
  Email: string;
  Message: string;
};

const ContactMe = ({ setSelectedPage }: componentsProp) => {
  const {
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      id="contactme"
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      className="p-20 w-full items-center  justify-center flex flex-col "
    >
      <span className="text-3xl">Contact Me</span>
      <div className="flex flex-col lg:flex-row border-opacity-50 p-20">
        <form
          action="https://formsubmit.co/lamichhanemanoj1@gmail.com"
          method="POST"
          onSubmit={onSubmit}
          className="p-5 shadow-xl flex  flex-grow flex-col bg-base-300 rounded-box place-items-center gap-3"
        >
          <input
            className="p-2 rounded-lg w-96 flex flex-grow"
            placeholder="Name"
            {...register("Name", { required: "Name cannot be Null" })}
          />
          {errors.Name && (
            <span className="text-red-500">{errors.Name.message}</span>
          )}
          <input
            placeholder="Email"
            className="p-2 rounded-lg w-96 flex flex-grow "
            {...register("Email", {
              required: "Email cannot be Null",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email" },
            })}
          />
          {errors.Email && (
            <span className="text-red-500">{errors.Email.message}</span>
          )}

          <textarea
            placeholder="Message"
            className="p-2 rounded-lg w-96 flex flex-grow "
            cols={5}
            {...register("Message", { required: "Message cannot be Null" })}
          />
          {errors.Message && (
            <span role="alert" className="text-red-500">
              {errors.Message.message}
            </span>
          )}
          <button className="btn bg-green-500 text-white w-96 inline-flex mt-10">
            {isSubmitting ? <ImSpinner8 /> : <IoIosSend />}
            Submit
          </button>
        </form>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box justify-center p-5 flex flex-col gap-5">
          <div className="bg-base-200 ">
            <a href="https://www.linkedin.com/in/manojlamichhane">
              <span className="flex items-center gap-2">
                <FaLinkedin className="text-3xl" />
                https://www.linkedin.com/in/manojlamichhane
              </span>
            </a>
          </div>
          <div className="bg-base-200">
            <a href="https://github.com/manojlamichhane">
              <span className="flex items-center gap-2">
                <FaGithub className="text-3xl" />
                https://github.com/manojlamichhane
              </span>
            </a>
          </div>
          <div className="bg-base-200 ">
            <a href="mailto:lamichhanemanoj1@gmail.com">
              <span className="flex items-center gap-2">
                <IoIosMail className="text-3xl" />
                lamichhanemanoj1@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
