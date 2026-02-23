import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className=" flex items-center justify-between pt-15 px-15 text-white w-full">
      <div className=" flex items-center gap-5">
        <img src="/shared/logo.svg" alt="" />
        <hr className=" border-white/50 border w-[500px]" />
      </div>

      <nav className=" flex items-center gap-5  backdrop-blur-sm py-6 w-[60%] max-w-[500px]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          00 HOME
        </NavLink>

        <NavLink
          to={"/destination"}
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        > 
          01 DESTINATION
        </NavLink>

        <NavLink
          to={"/crew"}
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          02 CREW
        </NavLink>

        <NavLink
          to={"/technology"}
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
        >
          03 TECHNOLOGY
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
