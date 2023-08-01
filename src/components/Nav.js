import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-pirelly.png";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex w-full items-center gap-10 px-20 py-4 font-medium">
      <div>
        <img src={logo} alt="LogoCompany" />
      </div>
      <ul className="flex gap-10">
        <li className=" active:text-bluePirelly">
          <a href="/">Home</a>
        </li>
        <li className=" active:text-bluePirelly">
          Products
          <FontAwesomeIcon className="pl-3 text-xs" icon={faChevronDown} />
        </li>
        <li className=" active:text-bluePirelly">
          <a href="/">Tutorial</a>
        </li>
        <li className=" active:text-bluePirelly">
          Company
          <FontAwesomeIcon className="pl-3 text-xs" icon={faChevronDown} />
        </li>
      </ul>
      <div className="flex-1 flex justify-end gap-10">
        <button className="text-bluePirelly">Sign in</button>
        <button className="button">Book A Demo</button>
      </div>
    </nav>
  );
}

export default Nav;
