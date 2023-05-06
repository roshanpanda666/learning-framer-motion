import React, { useState } from 'react'
import './app.css'
import {motion} from "framer-motion"
const App = () => {
  const[isAnimating,SetIsAnimating]=useState(false)
  return (
    <div>
      <div className="comp">
        
        <motion.div
        
          className="box0"
          animate={{
            x: isAnimating ? "50vw" : 0 ,
            opacity:isAnimating ? 1 : 0.5 ,
            // scale:2
            rotateX:isAnimating ? 360 : 0,
            rotate:isAnimating ? 360 : 0,
            scale:isAnimating ? 3 :1,
            
            
          }}
          initial={{
            
            
          }}
          transition={{
            type:"spring",
            stiffness: 60,
            // damping:20
          }}
          onClick={()=>SetIsAnimating(!isAnimating)}
          
         > <h1>tap me!</h1></motion.div>
      

          
        

        <motion.div 
          className="box1"
          whileHover={{
          scale:1.5,
          x:70
          }}

          transition={{
            type:"spring",
            stiffness:200
          }}

          whileTap={{
            scale:1.4,
            opacity:0.5,
            rotateY:180
          }}

        >
            <h1>hover me!</h1>
          
        </motion.div>

        <motion.div
        className='box0' 
        // drag="x"
        drag
        // dragConstraints={{
        //   right:20
        // }}
        whileTap={{
            scale:0.80
          
        }}
        transition={{
          type:"spring",
          stiffness:700,
          damping:20
        }}

        >
          <h1>Hover me anywhere</h1>
        </motion.div>
        

      </div>
    </div>
  )
}

export default App
