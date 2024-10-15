import { Achievements } from "../constants";
import Achieve from "../assets/PritamPic4.jpg"; // Ensure the image used is high-resolution
import { motion } from "framer-motion"; // Optional: for animations

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const AchievementsSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section: Achievements Content */}
        <div className="lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-bold lg:text-6xl"
            >
              Achievements
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              My Accomplishments
            </motion.span>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl py-6 font-light tracking-tight"
            >
              {Achievements.map((achievement, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                  <p className="text-lg">{achievement.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Section: Centered Larger Achievement Image with More Left Shift */}
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={Achieve}
            alt="Achievements"
            className="rounded-full object-cover w-72 h-72 lg:w-96 lg:h-96 lg:-ml-16" // Increased negative left margin
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
