import React from "react";
import userImage from "../../assets/images/about/avatar.jpg";
import downloadIcon from "../../assets/images/download.png";
import cvFile from "../../assets/images/cv.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
          src={userImage}
          alt=""
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Monalisa Ashley
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#1773EA]">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#1C9CEA]">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#e14a84] ">
              <FaDribbble />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
        {/* Social information start */}

        {/* Dowanload button start */}
        <a
          href={cvFile}
          download
          className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
        >
          <img src={downloadIcon} alt="icon" className="mr-2" />
          Download CV
        </a>

        {/* Dowanload button End */}
      </div>
    </>
  );
};

export default HomePage;
