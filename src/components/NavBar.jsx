import logo from "../assets/Mohit_Gupta4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Github, Instagram, Linkedin, Twitter } from "../constants";

const NavBar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className="w-25 " src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href={Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href={Github}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href={Twitter}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href={Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
