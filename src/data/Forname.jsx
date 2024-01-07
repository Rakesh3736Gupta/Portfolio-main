import React from 'react'
import { TypeAnimation } from 'react-type-animation'



const Forname = () => {
    const textSequence = ["Full Stack Developer",
    "Web Developer",
    // "UI-UX Designer",
    "Backend Developer",
    "Coder"];
  return (

    <div>
          <TypeAnimation
                    sequence={[textSequence[0], 1000, ""]}
                    repeat={Infinity}
                    cursor={true}
                
                    style = {
                        {
                            whiteSpace: "pre-line",
                            display:"block",
                            color: `yellow`,                  
                        }
                    }
                    // omitDeletionAnimation={true}
                />


    </div>
  )
}

export default Forname