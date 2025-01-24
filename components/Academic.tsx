import React from "react";
import * as motion from "motion/react-client";

const Academic = () => {
  return (
    <section className="bg-foreground h-screen flex justify-between items-center ">
      <motion.ol
        className="text-secondary space-y-4 px-20 w-[50%]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <li className="font-sans text-3xl">
          I have a degree in Bacelore of Engineering from Manipur University.
        </li>
        <li className="text-6xl text-primary">
          My goals is to get a dream job in google
        </li>
        <li className="text-7xl text-primary">&rsquo; &rsquo;</li>
      </motion.ol>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-80 h-full bg-primary"
      />
    </section>
  );
};

export default Academic;
