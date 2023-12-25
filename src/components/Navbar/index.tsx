import NavLink from "./NavLink";
import { SelectedPage } from "../../constants/type";

type navbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: navbarProps) => {
  return (
    <nav className="fixed top-0 z-30 flex w-full justify-center">
      <div className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavLink
          page="About Me"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Experience"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Contact Me"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </nav>
  );
};

export default Navbar;
