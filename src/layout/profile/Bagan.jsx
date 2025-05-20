import React from 'react';
import { baganList } from "../../data/ProfileList"; 
import "../../style/Bagan.css";
import { motion } from "framer-motion";
import { zoomInOnScroll} from "../../animasi/animations.jsx";
function Bagan() {
    return (
        <div className="bagan">
            <motion.div {...zoomInOnScroll}>
            <h2>Bagan Desa</h2>
            <div className="row">
                {baganList.map((bagan, index) => (
                    <div className="col-md-6 mt-3 " key={index}>
                        <h5 className="card-title text-center">{bagan.title}</h5>
                                <p className="card-text">{bagan.description}</p>
                        <div className="card">
                            <div className="card-body">
                                
                                <img
                                    src={bagan.image}
                                    alt={bagan.title}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </motion.div>
        </div>
    );
}

export default Bagan;
