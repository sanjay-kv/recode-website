"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export interface OurProjectsData {
  tag: string;
  title: string;
  description: string;
  items: {
    title: string;
    image: string;
  }[];
}

export interface OurProjectsProps {
  OurProjectsData: OurProjectsData;
}

interface HeadingComponentProps {
  tag: string;
  title: string;
  description: string;
}

export interface SelectComponentProps {
  items: {
    title: string;
    image: string;
  }[];
}

const OurProjects: React.FC<OurProjectsProps> = ({ OurProjectsData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 sm:gap-20 py-10 sm:py-20 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeadingComponent
        tag={OurProjectsData.tag}
        title={OurProjectsData.title}
        description={OurProjectsData.description}
      />
      <SelectComponent items={OurProjectsData.items} />
    </div>
  );
};

const HeadingComponent: React.FC<HeadingComponentProps> = ({
  tag,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full ">
      {/* left part */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center md:items-start md:justify-start gap-6 sm:gap-10 flex-col"
      >
        {/* tag */}
        <div
          className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm sm:text-base font-medium tracking-wide shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={() =>
            (window.location.href = "https://github.com/recodehive")
          }
        >
          {tag}
        </div>
        {/* title */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold md:w-11/12 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          {title}
        </div>
      </motion.div>
      {/* right part */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 text-base sm:text-lg text-justify h-full flex items-center md:pr-10 justify-center leading-relaxed"
      >
        {description}
      </motion.div>
    </div>
  );
};

const SelectComponent: React.FC<SelectComponentProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-12 w-full rounded-[30px] sm:rounded-[50px] shadow-2xl overflow-hidden"
    >
      <div className="flex flex-row md:flex-col col-span-1 md:col-span-4 gap-4 md:gap-6 items-start justify-start p-4 md:p-8 max-h-[30vh] md:max-h-[70vh] overflow-x-auto md:overflow-y-auto no-scrollbar bg-black">
        {items.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`text-white cursor-pointer ${activeItem === index
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-gray-800 hover:bg-gray-700"
              } p-2 md:p-6 rounded-2xl md:rounded-r-full w-40 md:w-4/5 relative transition-all duration-300 ease-in-out`}
            key={index}
            onClick={() => setActiveItem(index)}
          >
            <div className="text-xs text-wrap md:text-lg font-semibold md:w-10/12">{item.title}</div>
            <div className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white rounded-full transition-transform duration-300 ${activeItem === index ? 'translate-x-2' : ''}`}>
              <ChevronRight className="hidden md:block h-6 w-6 md:h-8 md:w-8" />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="https://github.com/recodehive"
        target="_blank"
        rel="noopener noreferrer"
        initial={false}
        animate={{ scale: isHovered ? 1.02 : 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="col-span-1 md:col-span-8 bg-gradient-to-br from-gray-100 to-white p-0 md:p-8"
      >
        <motion.img
          key={activeItem}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={items[activeItem].image}
          alt={items[activeItem].title}
          className="w-full h-[30vh] md:h-[60vh] object-cover rounded-2xl shadow-xl transform transition-transform duration-300"
        />
      </motion.a>
    </motion.div>
  );
};

export default OurProjects;
