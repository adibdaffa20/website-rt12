import React from 'react'
import { keunggulanList } from "../../data/ProfileList"; 
import "../../style/Keunggulan.css";
import { motion } from "framer-motion";
import { slideInRightOnScroll } from "../../animasi/animations.jsx";
function Keunggulan() {
    const {keunggulan} = keunggulanList[0];
  return (
    <div className='keunggulan'>
      <motion.div {...slideInRightOnScroll}>
        <h2 className="text-center">Keunggulan</h2>
      <div className="card">
                <div className="card-body">
                  
                  <ol className="card-text">
                                {keunggulan.split(". ").map((item, index) => (
                                    <li key={index}>{item.trim()}</li>
                                ))}
                            </ol>
                </div>
              </div>
      </motion.div>
    </div>
  )
}

export default Keunggulan
