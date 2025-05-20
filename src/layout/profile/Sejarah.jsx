import React from "react";
import { sejarahList } from "../../data/ProfileList"; 
import { motion } from "framer-motion";
import { slideInLeftOnScroll } from "../../animasi/animations.jsx";
function Sejarah() {
  const { sejarah } = sejarahList[0];
  return (
    <div className="sejarah">
      <motion.div {...slideInLeftOnScroll}>
      <h2 className="text-center">Sejarah</h2>
      <div className="card">
        <div className="card-body">

          <p className="card-text">{sejarah}</p>
        </div>
      </div></motion.div>
    </div>
  );
}

export default Sejarah;
