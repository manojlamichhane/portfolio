import { useState } from "react";
import { SelectedPage } from "./constants/type";
import {
  Navbar,
  AboutMe,
  Skills,
  Projects,
  Experience,
  ContactMe,
  Footer,
} from "./components";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
  );

  const scrollHandler = (value: SelectedPage) => {
    setSelectedPage(value);
    const nextSection = document.getElementById(value);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-base-200">
      <Navbar selectedPage={selectedPage} setSelectedPage={scrollHandler} />
      <AboutMe setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Experience setSelectedPage={setSelectedPage} />
      <ContactMe setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
