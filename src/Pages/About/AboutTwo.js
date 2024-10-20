import React from 'react';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import '../../Share/Style.css';
import SliderCommon from '../../Share/SliderCommon';
import AboutCard from './AboutCard';
import HomeCard from '../../Share/HomeCard';
import PageTitle from '../../Share/PageTitle';

const AboutTwo = () => {
  const { local, serviceArray } = UseData();

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden ">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      I'msssssssss Creative Director and UI/UX Designer from
                      Sydney, Australia, working in web development and print
                      media. I enjoy turning complex problems into simple,
                      beautiful and intuitive designs.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    A skilled full stack developer with expertise in building
                    efficient backend services using Node.js and Express, and
                    creating responsive frontend applications with React.
                    Proficient in database management with MongoDB and SQL.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    Strong in problem-solving, data structures, and algorithms,
                    with a passion for delivering clean, scalable code. Proven
                    ability to work on real-world projects, from RESTful APIs to
                    full stack platforms, applying best practices in software
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {serviceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* Slick Slider call here  */}
            <SliderCommon />
          </div>

          {/* Common Footer call here */}
          <Footer bg={'#FFFF'} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
