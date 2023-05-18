// import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


const Home = () => {
   

const logos = [
  {
    src: 'src/assets/react.png',
    width: 100,
    height: 100,
  },
  {
    src: '/logo2.png',
    width: 80,
    height: 80,
  },
  {
    src: '/logo3.png',
    width: 120,
    height: 120,
  },
];

const FloatingLogos = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const opacity = useTransform(
    y,
    [0, window.innerHeight / 2, window.innerHeight],
    [1, 0.5, 0]
  );

  return (
    <motion.div
      onMouseMove={(e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }}
    >
      {logos.map((logo) => {
        return (
          <motion.img
            key={logo.src}
            src={logo.src}
            style={{
              width: logo.width,
              height: logo.height,
              position: 'absolute',
              x: useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-200, 200]),
              y: useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-200, 200]),
              opacity: opacity,
            }}
            animate={{
              x,
              y,
            }}
          />
        );
      })}
    </motion.div>
  );
};
     
   
 };

 export default Home;





//<div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <motion.h2 
//           drag 
//           whileHover={{ scale: 1.6 }}
//           // whileTap={{
//           //   scale: 0.8,
//           //   rotate: -90,
//           //   borderRadius: "100%"
//           // }}
          
//           className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Full Stack Developer
//           </motion.h2>
//           <p className="text-gray-500 py-4 max-w-md">
//             I have about a year of experience including bootcamp, self teaching, work.
//           </p>

//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div>
//           <motion.img
//            drag 
//            whileHover={{ scale: 1.6, rotate: 360 }}
//             src="https://media-exp1.licdn.com/dms/image/C4E03AQGtBTamca3fVg/profile-displayphoto-shrink_200_200/0/1658441145501?e=1674086400&v=beta&t=5ahhT32VmMb9m67o6DJ5PgSoU_6hixRTa8wcYcrLD-g"
//             alt="my profile"
//             className="rounded-2xl h-148 w-148"
//           />
//         </div>
//       </div>
//     </div>