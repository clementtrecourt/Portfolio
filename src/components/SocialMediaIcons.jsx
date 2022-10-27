import React from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/cl%C3%A9ment-tr%C3%A9court-43666a201//"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialLinkedin size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/clementtrecourt"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://drive.google.com/file/d/12e41i91ioZGvHtlyXx6pjXF2SMCHUXw2/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineDocumentText size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
