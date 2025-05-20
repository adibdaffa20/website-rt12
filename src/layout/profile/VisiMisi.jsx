import React from "react";
import { visimisiList } from "../../data/ProfileList";
import '../../style/Profile.css';
import { motion } from "framer-motion";
import { slideInLeftOnScroll, slideInRightOnScroll } from "../../animasi/animations.jsx";


function VisiMisi() {
    const { visi, misi } = visimisiList[0];

    return (
        <div className="visimisi">

            <div className="row mb-5">
                <div className="col-md-6 mt-5">

                    <motion.div {...slideInLeftOnScroll}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Visi</h5>
                                <p className="card-text">{visi}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <div className="col-md-6 mt-5">
                    <motion.div {...slideInRightOnScroll}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Misi</h5>
                                <ol className="card-text">
                                    {misi.split(". ").map((item, index) => (
                                        <li key={index}>{item.trim()}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default VisiMisi;
