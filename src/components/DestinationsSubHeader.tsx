import { NavLink } from "react-router";

const DestinationsSubHeader = () => {
  return (
    <nav className="flex gap-5">
      <NavLink
        to={"/destination/moon"}
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
      >
        MOON
      </NavLink>
      <NavLink
        to={"/destination/mars"}
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
      >
        MARS
      </NavLink>
      <NavLink
        to={"/destination/europa"}
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
      >
        EUROPA
      </NavLink>
      <NavLink
        to={"/destination/titan"}
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
      >
        TITAN
      </NavLink>
    </nav>
  );
};

export default DestinationsSubHeader;
