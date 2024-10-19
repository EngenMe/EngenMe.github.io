import React from "react";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import { BsXCircle } from "react-icons/bs";
import Modal from "react-modal";
import user from "../../assets/images/about/about.jpg";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const CommonBlog = ({ items, count }) => {
  const { local } = UseData();
  const { isOpen, setIsOpen, singleData, handleBlogsData, blogsData } =
    UseData();
  const handleModle = (id) => {
    handleBlogsData(id);
  };

  const blogDescriptionSplit = singleData?.description?.split("\n");
  return (
    <>
      <PageTitle title="Blog"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              {/* Blog page title */}
              <h2 className="after-effect after:left-32 mt-12 lg:mt-0">
                Blogs
              </h2>
              <div
                className={`${
                  items
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px]"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px]"
                } grid   gap-x-10 gap-y-7  mb-6`}
              >
                {/* Blog items start */}
                {blogsData.slice(0, count).map((item) => {
                  return (
                    <div
                      key={item.id}
                      style={{
                        background: `${
                          local === "dark" ? "transparent" : item?.bg
                        }`,
                      }}
                      className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          onClick={() => handleModle(item?.id)}
                          className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                          src={item?.imgSmall}
                          alt="blog"
                        />
                      </div>
                      <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                        <span>{item?.date}</span>
                        <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                          {item?.category}
                        </span>
                      </div>
                      <h3
                        onClick={() => setIsOpen(true)}
                        className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
                      >
                        {item?.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Blog items End */}

            {/* Blog modal start  */}
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              className="outline-none flex items-center p-4 md:p-8  rounded-2xl my-8"
            >
              <div className=" w-full  md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
                <div
                  className={`${
                    local === "dark" ? "scrollbarDark" : "scrollbarLight"
                  } overflow-y-scroll max-h-[80vh] `}
                >
                  <div className="pr-3 pb-2">
                    <BsXCircle
                      onClick={() => setIsOpen(false)}
                      className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
                    />
                    <img
                      className=" w-full md:h-[450px]  object-cover rounded-xl mt-6"
                      src={singleData.img}
                      alt="blog"
                    />
                    <div className="flex mt-4 text-tiny text-black dark:text-white">
                      <span>{singleData?.date}</span>
                      <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                        {singleData?.category}
                      </span>
                    </div>
                    <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
                      {singleData.title}
                    </h2>
                    {blogDescriptionSplit?.map((item, j) => (
                      <p
                        className="dark:text-white font-normal text-[15px] sm:text-sm my-4"
                        key={j}
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  {/* Comment show section */}
                  <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
                    <div className=" dark:bg-[#232220] bg-[#ffffff]   flex  p-4 rounded-lg  ">
                      <div>
                        <img
                          className="  md:w-[125px] rounded-xl "
                          src={user}
                          alt=""
                        />
                      </div>
                      <div className="pl-5">
                        <div className="flex justify-between items-center">
                          <h3 className="dark:text-white text-[22px] font-medium">
                            Rafia Ana
                          </h3>{" "}
                          <span className="dark:text-[#dedede] text-tiny ">
                            15 min ago
                          </span>
                        </div>
                        <p className="dark:text-white  md:pr-16">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sequi nam ad, unde vel aut soluta atque
                          consequatur. Omnis, debitis nihil?
                        </p>
                        <button className="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Comment show Section */}

                  {/* Start Social Share */}
                  <div className="flex items-center md:justify-end space-x-4 mt-8 mr-3">
                    <h6 className="dark:text-white text-[20px] ">
                      Login with:
                    </h6>
                    <div className="flex  space-x-3">
                      {/* facebook link add here */}
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#1773EA]">
                          <FaFacebookF />
                        </span>
                      </a>
                      {/* twitter link add here */}
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#1C9CEA]">
                          <FaTwitter />
                        </span>
                      </a>
                      {/* drop link add here */}
                      <a
                        href="https://dribbble.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#e14a84] ">
                          <FaDribbble />
                        </span>
                      </a>
                      {/* linkedin link add here */}
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
                  </div>
                  {/* End Social Share */}

                  {/* Start Comment Box */}
                  <div className="pt-3">
                    <div className=" pr-3 pb-4">
                      <form className="w-full ">
                        <label className="block mb-2">
                          <span className="dark:text-white text-[25px] font-medium  ">
                            Leave a Reply
                          </span>
                          <textarea
                            className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray  "
                            rows="3"
                          ></textarea>
                        </label>
                        <button className="flex items-center  bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear  hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-[12px] text-lg text-white rounded-[35px] mt-8">
                          Comment
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* End Comment Box */}
                </div>
              </div>
            </Modal>
            {/* Blog modal End  */}
          </div>
          {/* End .blog */}

          {/* Common Footer call here */}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default CommonBlog;
