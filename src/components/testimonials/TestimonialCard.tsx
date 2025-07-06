import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialCardProps {
  name: string;
  username: string;
  content: string;
  date: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  username,
  content,
  date,
  avatar,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[250px] flex flex-col justify-between"
    >
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-4">
        <Avatar className="w-24 h-24 rounded-full ">
          <AvatarImage src={avatar} className="object-contain" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">@{username}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 line-clamp-3 my-4 flex-grow">{content}</p>

      {/* Footer with Hashtags and Date */}
      <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100 dark:border-gray-700">
        <div className="flex gap-2 flex-wrap">
          {content.match(/#\w+/g)?.map((hashtag, index) => (
            <span
              key={index}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              {hashtag}
            </span>
          ))}
        </div>
        <span className="text-gray-400 dark:text-gray-500 shrink-0">{date}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
