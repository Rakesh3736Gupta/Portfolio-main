import React from 'react'

// import HighlightText from './HighlightText'
// import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading,  codeblock, imgPos, backgroudGradient, codeColor
}) => {
  return (
    <div className={`flex   flex-col-reverse ${position}   gap-14 lg:gap-20 bg-[#0a192f]      justify-center mx-auto`}>

                {/*Section 1*/}
        <div className="h-fit code-border flex flex-row  text-[15px] sm:text-sm leading-[18px] sm:leading-6  w-1/2  -px-30  mr-30  text-5xl">   
                    {backgroudGradient}
                    <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                    </div>

                    <div className={`w-[90%] flex flex-col gap-2 font-bold  font-mono pr-2`}>
                        <TypeAnimation
                            sequence={[codeblock[0], 2000, ""]}
                            repeat={Infinity}
                            cursor={true}
                        
                            style = {
                                {
                                    whiteSpace: "pre-line",
                                    display:"block",
                                    color: `yellow`,                  
                                }
                            }
                            omitDeletionAnimation={true}
                        />
                        <TypeAnimation
                            sequence={[codeblock[1], 1000, ""]}
                            repeat={Infinity}
                            cursor={true}
                        
                            style = {
                                {
                                    whiteSpace: "pre-line",
                                    display:"block",
                                    color: `white`,                  
                                }
                            }
                            omitDeletionAnimation={true}
                        />
                        <TypeAnimation
                            sequence={[codeblock[2], 200, ""]}
                            repeat={Infinity}
                            cursor={true}
                        
                            style = {
                                {
                                    whiteSpace: "pre-line",
                                    display:"block",
                                    color: `#D43D63`,                  
                                }
                            }
                            omitDeletionAnimation={true}
                        />
                    </div>

                </div>  
 {/*Section 2*/}
        <div className=''>
              <div className='  flex flex-col   w-1/2    ml-20 justify-center items-center'>
                    {heading}
                    <div className='text-richblack-300 font-bold '>
                    {subheading}
                   </div>   
              </div>
        </div>
      
       
        {/* <div className=' h-fit bg-richblack-800 bg-opacity-70 flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'>  */}
             
    </div>
  )
}

export default CodeBlocks