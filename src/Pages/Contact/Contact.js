import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import CommonContact from "./CommonContact";

const Contact = () => {
  const { local, contactArray } = UseData();

  return (
    <>
      <PageTitle title="Contact"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="py-12">
              <h2 className="after-effect after:left-40 mb-[40px] mt-12  lg:mt-0">
                Contact
              </h2>
              <div className="lg:flex gap-x-20">
                <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                  {/* Contact Infomation */}

                  {contactArray.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: `${
                          local === "dark" ? "#212425" : item?.bg
                        }`,
                      }}
                      className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                    >
                      <span className="w-8 mt-2">
                        <img
                          src={item.icon}
                          alt="icon"
                          className="text-4xl dark:text-white"
                        />
                      </span>
                      <div className="space-y-2">
                        <p className="text-xl font-semibold dark:text-white">
                          {item?.title} :
                        </p>
                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
                          {item?.item1}
                        </p>
                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
                          {item?.item2}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                  <CommonContact condition={false} />
                </div>
              </div>
            </div>
          </div>
          {/* End contact */}

          {/* Common Footer call here */}
          <Footer condition={true} bg={"#F8FBFB"} />
        </div>
      </section>
    </>
  );
};

export default Contact;
