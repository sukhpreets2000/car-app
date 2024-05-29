import { FaCheck } from "react-icons/fa6";
import aboutImg from "../assets/about-img.jpg";

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-5 p-3">
          <div className="my-4">
            <h1 className="text-yellow text-[45px] text-center sec-heading max-w-[200px] mx-auto py-[14px]">
              About us
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="text-[20px] my-2 text-justify tracking-tight text-grey1">
                A Cars Online we consider ourselves a part of the big automobile
                community. We service all makes and models and take pride in
                every repair
              </h1>
              <p className="text-grey text-justify tracking-tight">
                When it comes to repairing or doing checkups on your car’s, all
                our team combined has almost a century of practical experience.
                We aim to make our service as reasonably priced as possible.
                That’s why we cut on all unessential business expenses.
              </p>
              <h2 className="text-center text-[25px] my-3 text-grey1">
                WHY CHOOSE US
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div>
                  <ul>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      FREE Loaner Cars
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      FREE Shuttle Service
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Collision repair
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Air conditioning
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Te Dent repair
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Vehicle diagnostics
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Paint scratch repair
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Glass replacement
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Tire installation
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Valet service
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Wheel alinment
                    </li>
                    <li className="flex gap-2 items-center text-grey1">
                      <FaCheck className="text-yellow" />
                      Brake repair
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={aboutImg}
                alt="AboutImg"
                className="m-w-[100%] h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-darkblue py-[50px] my-12">
        <div className="container mx-auto p-3">
          <div className="grid grid-cols-4">
            <div className="flex flex-col items-center">
              <h2 className="text-[35px] text-yellow">600+</h2>
              <p className="text-white">Happy clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[35px] text-yellow">600+</h2>
              <p className="text-white">Happy clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[35px] text-yellow">600+</h2>
              <p className="text-white">Happy clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[35px] text-yellow">600+</h2>
              <p className="text-white">Happy clients</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
