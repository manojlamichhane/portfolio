import { SelectedPage } from "../../constants/type";

type linkProps = {
  page: "About Me" | "Skills" | "Projects" | "Experience" | "Contact Me";
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLink = ({ page, selectedPage, setSelectedPage }: linkProps) => {
  const lower = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div
      className={`${
        lower === selectedPage ? "text-green-500" : ""
      } group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none `}
      onClick={() => setSelectedPage(lower)}
    >
      {page}
    </div>
  );
};

export default NavLink;
