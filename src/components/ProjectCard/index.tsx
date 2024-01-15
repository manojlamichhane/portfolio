type projectCardProps = {
  key: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
};

const ProjectCard = ({
  title,
  description,
  skills,
  link,
}: projectCardProps) => {
  return (
    <div className=" p-2 shadow-xl grid flex-grow card bg-base-300 w-80 rounded-box">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            return (
              <div key={skill} className="p-2 bg-gray-300 rounded-md gap-4">
                <p>{skill}</p>
              </div>
            );
          })}
        </div>

        <div className="card-actions ">
          <a
            href={link}
            target="_blank"
            className="btn bg-green-400 w-full text-white hover:text-black"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
