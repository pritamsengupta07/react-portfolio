import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        {/* Increased logo size */}
        <img className="mx-2 w-20" src={logo} alt="logo" /> {/* Changed from w-16 to w-20 */}
      </div>

      {/* Social Icons and CV Button Section */}
      <div className="flex items-center gap-4 mr-8">
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-2xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pritam-sengupta-088982250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pritamsengupta07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>


        </div>

        {/* CV Button */}
        <a
          href="./assets/resume3.pdf"
          download="Pritam_Sengupta_CV.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded blink-animation"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
