import React from "react";
import logo from "../assets/images/logo/logo-preview.png";
import homeonelight from "../assets/images/preview/homeonelight.png";
import homeonedark from "../assets/images/preview/homeonedark.png";
import hometwolight from "../assets/images/preview/hometwolight.png";
import hometwodark from "../assets/images/preview/hometwodark.png";
import previewimg from "../assets/images/preview/preview.png";

// ******************************************************
import reactLogo from "../assets/images/preview/fatures/1.png";
import reactRouterLogo from "../assets/images/preview/fatures/2.png";
import tailwindLogo from "../assets/images/preview/fatures/3.png";
import reactHooksLogo from "../assets/images/preview/fatures/4.png";
import apiReadyLogo from "../assets/images/preview/fatures/5.png";
import reactIconLogo from "../assets/images/preview/fatures/6.png";
import reactHelmetLogo from "../assets/images/preview/fatures/7.png";
import reactToastifyLogo from "../assets/images/preview/fatures/8.png";
import workingForm from "../assets/images/preview/fatures/9.png";

// ***************************************************
import { Link } from "react-router-dom";
import UseData from "../Hooks/UseData";
import PageTitle from "./PageTitle";
// ***************************************************

const Preview = () => {
  const { handleTheme } = UseData();

  // dark and light mode control

  const handle = (e) => {
    handleTheme(e);
  };

  // preview Home page element

  const previewArray = [
    {
      img: homeonelight,
      title: "Box Layout (Light)",
      link: "/homeTwo",
      id: "1",
    },
    {
      img: homeonedark,
      title: "Box Layout (Dark)",
      link: "/homeTwo",
      id: "2",
    },
    {
      img: hometwolight,
      title: "Regular Layout (Light)",
      link: "/home",
      id: "3",
    },
    {
      img: hometwodark,
      title: "Regular Layout (Dark)",
      link: "/home",
      id: "4",
    },
  ];

  // features array

  const features = [
    {
      icon: reactLogo,
      dataDealy: "0",
      title: "React v18+",
      description:
        "We used latest react vertion ^18. Max Components are Reusable for you. It's a awesome design made by React.",
    },
    {
      icon: reactRouterLogo,
      dataDealy: "100",
      title: "React Router v6+",
      description:
        "It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling",
    },
    {
      icon: tailwindLogo,
      dataDealy: "200",
      title: "Tailwind v3+",
      description:
        "Tailwind CSS is basically a modern,trending and utility-first CSS framework for rapidly building custom user interfaces.",
    },

    {
      icon: reactIconLogo,
      dataDealy: "200",
      title: "React Icon",
      description:
        "React-icons uses ES6 features to import the icons into your React app. And it makes it so that only the icons you actually use from each library get imported.",
    },
    {
      icon: reactHooksLogo,
      dataDealy: "0",
      title: "React Hooks",
      description:
        "It allows you to use state and other React features without writing a class. Hooks are the functions which hook into React state and lifecycle features from function components.",
    },
    {
      icon: apiReadyLogo,
      dataDealy: "100",
      title: "Api Ready Code",
      description:
        "We made all the code with Array of Object based. so you can prepare for your api call whenever you want for it",
    },

    {
      icon: reactHelmetLogo,
      dataDealy: "0",
      title: "React Helmet-Async",
      description:
        "React Helmet Async is a component which lets you control your document head using their React component. With this plugin, attributes you add in their component, e.g. title, meta attributes",
    },
    {
      icon: reactToastifyLogo,
      dataDealy: "100",
      title: "React Toastify",
      description:
        "React-Toastify allows you to add notifications to your app with easy and comfortable way",
    },
    {
      icon: workingForm,
      dataDealy: "200",
      title: "Working Contact Form",
      description:
        "You will get working contact form without any type of Bakcend. We integrated it With Email js. just follow our documentation and integrate it easy way",
    },
  ];

  return (
    <>
      <PageTitle title="Preview"></PageTitle>
      <section className="bg-previewBg bg-no-repeat bg-center  bg-cover">
        <div className="text-center pt-[100px] pb-[90px] h-[80vh] md:h-[100vh] flex items-center justify-center flex-col">
          {/* Site logo */}
          <img
            className="inline-block h-[26px] lg:h-[46px]"
            src={logo}
            alt="logo"
            data-aos="fade"
          />
          <p
            className="font-extrabold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[20px] "
            data-aos="fade"
          >
            Modern,Trending & Creative Portfolio
            <br className="md:block hidden " />
            <span className="text-[#F95054]">Tailwind CSS</span> &{" "}
            <span className="text-[#F95054]">React JS</span>
          </p>

          <div className="flex mt-6 justify-center">
            <a
              href="#demo"
              className="flex-shrink-0 inline-flex mr-3 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-full shadow-md"
            >
              View Demos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                ></path>
              </svg>
            </a>
            <a
              href="https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 rounded-full bg-indigo-50 text-black-900 shadow-md hover:bg-slate-50"
            >
              Purchase Now
            </a>
          </div>
        </div>
      </section>
      {/* End .bg-previewBg */}

      <section
        className="bg-[#000000] bg-no-repeat bg-center bg-cover bg-fixed"
        id="demo"
      >
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#FA5252] text-[32px] md:text-[45px] font-semibold ">
            Home Demo
          </h1>
          <img className=" block mx-auto " src={previewimg} alt="" />
          <h3 className="text-[22px] md:text-[32px] font-semibold text-[#ddd]">
            02 Unique Light & Dark Demo
          </h3>

          <p className="text-md text-[#aaa] font-normal w-full md:w-2/3 lg:w-[50%] mx-auto mt-2.5 ">
            Bostami build with Modern, Elegant & Beautiful trendng <br />
            technology like Tailwind CSS and React Js.
          </p>
        </div>
        {/* End .container */}

        <div
          className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto gap-5 md:gap-[40px] pb-[100px]  "
          data-aos="fade"
        >
          {/* previewimg element start */}
          {previewArray.map((item) => {
            const mode = item.id % 2 === 0 ? "dark" : "light";
            return (
              <div
                onClick={() => handle(mode)}
                className="text-center w-full mx-auto shadow-zinc-400  rounded-[12px] border-4 border-slate-800 border-solid duration-500 transition   hover:border-slate-500"
                key={item.id}
              >
                <Link to={item.link} target="_blank">
                  <img
                    className=" w-full  cursor-pointer "
                    src={item.img}
                    alt=""
                  />
                </Link>
                <h3 className="bg-gradient-to-r bg-slate-900 rounded-b-[6px] w-full font-medium text-white capitalize py-4  text-[20px]    ">
                  {item.title}
                </h3>
              </div>
            );
          })}

          {/* previewimg element start */}
        </div>
      </section>

      {/* Features section start */}
      <section className="bg-[#111111]">
        <div className="container px-4 lg:px-0 text-center mb-[100px] pt-[80px]">
          <h1 className="text-[#FA5252] text-[32px] md:text-[45px] font-semibold ">
            Salient Features
          </h1>
          <img className=" block mx-auto " src={previewimg} alt="" />
        </div>
        {/* End .container  */}

        <div className=" container px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-[100px] ">
          {/* features element */}
          {features.map((item) => (
            <div
              key={Math.random()}
              className="bg-slate-800 text-center rounded-xl transition-all duration-300 ease-linear group p-8"
              data-aos="fade"
              data-aos-delay={item.dataDealy}
            >
              <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center transition-all duration-300 ease-linear bg-[#33343a] mb-5 group-hover:bg-[#525252]">
                <img className="w-12" src={item?.icon} alt="" />
              </div>
              <h3 className="text-white text-[24px] font-medium">
                {item?.title}
              </h3>
              <p className="text-[#9197a0] transition-all duration-300 ease-linear mt-3 group-hover:text-[#aaa] ">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Features section start */}

      {/* Start Call To Actions */}
      <section className="text-center bg-[#000] py-[120px] ">
        <p
          data-aos="fade"
          className="font-bold text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[42px] text-white pt-[40px] mx-auto max-w-4xl px-4 "
        >
          Purchase Bostami & Build Your Dream Portfolio{" "}
          <span className="text-[#F95054]">React JS</span> &{" "}
          <span className="text-[#F95054]">Tailwind CSS</span> Portfolio
          Template.
        </p>

        <a
          href="https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex mt-8 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-full shadow-md"
        >
          Purchase Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            ></path>
          </svg>
        </a>
      </section>
      {/* End call to action */}

      {/* Start Footer */}
      <footer className="bg-slate-800">
        <p className="text-center py-5 text-white ">
          © 2022 All Rights Reserved by{" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            ib-themes
          </a>
          .
        </p>
      </footer>
      {/* End footer */}
    </>
  );
};

export default Preview;
