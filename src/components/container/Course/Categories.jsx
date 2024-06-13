import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Categories = ({ icon, category, id }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center flex-col gap-4 bg-white py-8 rounded-md"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div className="text-center">{category}</div>
      {/* <Link to={`/loker/`} ></Link> */}
      <a href={`/loker/${id}`} className="text-xs text-gray-400 hover:text-blue-500 p-2 rounded-lg text-center">
        Lihat Selengkapnya
      </a>
    </motion.div>
  );
};

export default Categories;