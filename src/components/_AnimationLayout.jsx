 
import { Outlet, useLocation } from "react-router-dom";
import {  motion } from "framer-motion";

const _AnimationLayout = () => {

  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.6
  };


  return (
      <motion.main
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.main>
  );


};

export default _AnimationLayout;