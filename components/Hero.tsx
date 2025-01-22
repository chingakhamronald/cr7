import React from "react";
import * as motion from "motion/react-client";
const Hero = () => {
  return (
    <section className="bg-foreground h-screen ml-4 flex justify-between px-16 items-center">
      <div>
        <motion.ol
          className="text-secondary space-y-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li className="font-sans text-3xl">Hi!</li>
          <li className="text-6xl text-primary">Ronaldo</li>
          <li className="text-6xl text-primary">Chingakham</li>
          <li className="font-sans text-3xl">Hire me as Frontend Developer!</li>
        </motion.ol>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-60 h-60 bg-primary relative bottom-32 right-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-96 h-96 bg-secondary mt-7 right-10 absolute"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-0 flex items-end space-y-8 mt-32"
      >
        <div className="w-28 h-32 bg-primary" />
        <div className="w-28 h-64 bg-primary" />
        <div className="w-28 h-96 bg-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
