import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "src/assets/icons/CheckArrowIcon";

const pricingData = [
  "Vestibulum viverra",
  "Morbi mollis metus pretium",
  "Etiam lectus nunc, commodo",
  "Ut quam nisl mollis id pretium",
  "Suspendisse bibendum",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-b from-yellow-100 to-yellow-300 bg-clip-text text-transparent highlight">
                Choose your best plan
              </h2>
              <p className="mb-6 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-gray-400 text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl bg-gray-200">
                  <h4 className="mb-2 text-xl font-bold font-heading text-black text-left">
                    Beginner
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-grey text-left mt-4 mr-2">
                      $0
                    </div>
                    <div className="text-gray-800">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-black leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-black">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 rounded-3xl bg-gray-200">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-black text-left">
                    Standard
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-black text-left mt-4 mr-2">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-black">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-black leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-14 text-black">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored text-black font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl bg-gray-200">
                  <h4 className="mb-2 text-xl font-bold font-heading text-black text-left">
                    Premium
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-black text-left mt-4 mr-2">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-black leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-black">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored text-black font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

