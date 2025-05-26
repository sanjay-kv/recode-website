import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is the recode hive?",
    answer:
      "Recode Hive is a platform focused on students with the right resources at the right time, We help you to focus on the important topics and tools which is used in the current industry standard compared to the traditional university. This includes a summary of data engineering-related tutorials, blogs, and the potential to do an open-source program and earn.",
  },
  {
    question: "What features do the recode hive provides?",
    answer:
      "We provide students with the opportunity to learn and apply knowledge on the Recode Hive GitHub organisation, which includes 1000+ data-related projects, and earn as well. This community is non-profit and inclusive for all.",
  },
  {
    question: "How can I contribute tutorials?",
    answer:
      "The process is very straightforward, Yes this community is open-source, and entire code base is available on GitHub to fork and contribute. if you are a beginner, then,.",
  },
  {
    question: "What all resources are available here?",
    answer:
      "At the moment, SQL, Python, GitHub, Postman, NextJs resources are available on the platform for you to engage and modify. in the future will plan to launch advanced data tools tutorials.",
  },
  {
    question: "How can I contribute as a beginner?",
    answer:
      "It can be tricky if you are a beginner, but here we build this community focusing on your priority for everyone to learn opensource contributions in a simple and effective way..",
  },
  {
    question: "How can I earn from this recode hive organisation?",
    answer:
      "You can earn through GitHub sponsorship. Every week, I sponsor one person who contributes valuable open-source contributions. The sponsorship amount ranges from 100 to 500 INR per week.",
  },
  {
    question: "How will I stay up to date with the latest news from this organisation?",
    answer:
      "The best way to stay up to date is the newsletter, which makes it very easy and provides weekly updates to you on what's happening on the recode hive community.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col justify-center items-center gap-x-8 gap-y-12 xl:gap-28 lg:flex-row lg:justify-between">
          <div className="w-full">
            <div className="mb-8 lg:mb-16">
              <h6 className="text-lg text-center lg:text-left font-medium text-indigo-600 mb-2">
                FAQs
              </h6>
              <h2 className="text-4xl text-center lg:text-left font-bold text-gray-900 dark:text-gray-100 leading-snug">
                Looking for answers?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                Find answers to the most common questions about Recode Hive.
              </p>
            </div>

            {/* Accordion Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="accordion h-fit border-gray-200 dark:border-gray-700 pb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="accordion-toggle group flex justify-between items-center text-lg font-medium text-gray-700 dark:text-gray-200 w-full transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <motion.span
                      className="transform transition-transform duration-300"
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                      }}
                    >
                      <FiChevronDown size={22} />
                    </motion.span>
                  </button>
                  <motion.div
                    className="accordion-content overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
