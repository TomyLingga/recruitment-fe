import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
  };
  return (
    <section className="px-48 py-10 bg-gradient-to-b from-[#EAF2F8] via-white to-[#EAF2F8]" id="courses">
        <div className="grid md:grid-cols-2 place-items-center">
            <div className="mx-auto">
                <div className="text-center">
                    <div className="sm:text-3xl text-2xl font-bold mb-5">
                        <span className=" text-colorBodies3">Lowongan</span>
                    </div>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-4 p-3 bg-colorBodies3 rounded-lg"
                >
                  {categories.map((category) => {
                      return <Categories key={category.id} {...category} />;
                  })}
                </motion.div>
            </div>
            <div className="border-[3px] border-solid border-colorBodies3 rounded-lg">
                <img src='img/icon/search.png' alt="" className="p-8 w-80" />
            </div>
        </div>
    </section>
  );
};

export default Courses;