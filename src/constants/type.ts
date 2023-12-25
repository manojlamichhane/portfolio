export enum SelectedPage {
  AboutMe = "aboutme",
  Skills = "skills",
  Projects = "projects",
  Experience = "experience",
  ContactMe = "contactme",
}

export type componentsProp = {
  setSelectedPage: (value: SelectedPage) => void;
};
