import React from "react";
import "../style/Apbd.css"; 
import { apbdList } from "../data/ApbdList";
import { motion } from "framer-motion";

import { slideInRightOnScroll, zoomInOnScroll } from "../animasi/animations.jsx";

const  Apbd = () => {
    const { pendapatan, pengeluaran } = apbdList[0];
  return (
    <div className="apbd">
      <motion.div {...slideInRightOnScroll}>
      <h2> APB Desa 2024</h2>
      <p>
        Akses cepat dan transparan terhadap APB Desa serta proyek pembangunan
      </p>
      </motion.div>
      
      <motion.div{...zoomInOnScroll}>
        <div className="card mb-3">
        <div className="card-body ">
          <h6>Pendapatan Desa</h6>
          <h3 className="text-center">{pendapatan}</h3>
        </div>
       
      </div>
      </motion.div>

 <motion.div {...zoomInOnScroll}>
      <div className="card mb-3">
        <div className="card-body ">
        
           <h6>Pengeluaran Desa</h6>
          <h3 className="text-center">{pengeluaran}</h3>
        
        </div>
      </div>
       </motion.div>
      
    </div>
  );
}

export default Apbd;
