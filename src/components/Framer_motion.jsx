import React from 'react'
 import { motion } from 'framer-motion';

const Framer_motion = ({name , value}) => {
  return (
    <div>
         <motion.div
    initial={{ x: -200 }}
    animate={{ x: value}}
    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
  >
   {name}
  </motion.div> 
    </div>
  
  )
}

export default Framer_motion