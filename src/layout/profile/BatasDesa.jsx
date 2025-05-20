import React from 'react'
import { batasList } from '../../data/ProfileList';
import { motion } from "framer-motion";
import { slideInLeftOnScroll, slideInRightOnScroll } from "../../animasi/animations.jsx";
const BatasDesa = () => {
    return (
        <div className="batas-desa mt-5 mb-5">
            <motion.div {...slideInLeftOnScroll}>
            <h2>Peta dan Batas Wilayah Desa</h2>
            </motion.div>
            <div className="row ">
                <div className="col-md-6 mt-2">
                    <motion.div {...slideInLeftOnScroll}>
                    <div className="card">
                        <div className="card-body">


                            <h5 className='text-center'> Batas Wilayah Desa</h5>
                            {batasList.map((batas) => (
                                <div className="card-text" key={batas.id}>
                                    <p className='text-center'>{batas.description}</p>
                                <div className="row" >
                                    <div className="col-md-6">
                                        <h5> Batas Timur</h5>
                                        <ol>
                                            {batas.batasTimur.split(". ").map((item) => (
                                                <li key={item}>{item.trim()}</li>
                                            ))}
                                        </ol>
                                    </div>


                                    <div className="col-md-6">
                                        <h5>Batas Barat</h5>
                                        <ol>
                                            {batas.batasBarat.split(". ").map((item) => (
                                                <li key={item}>{item.trim()}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Batas Selatan</h5>
                                        <ol>
                                            {batas.batasSelatan.split(". ").map((item) => (
                                                <li key={item}>{item.trim()}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Batas Utara</h5>
                                        <ol>
                                            {batas.batasUtara.split(". ").map((item) => (
                                                <li key={item}>{item.trim()}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <p className="card-text">
                                        <strong>Luas Desa:</strong> {batas.luasDesa} m²
                                    </p>
                                </div>
                                </div>
                            ))}



                        </div>

                    </div>
                    </motion.div>
                </div>
                <div className="col-md-6 mt-2">
                    <motion.div {...slideInRightOnScroll}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Peta Desa</h5>
                            <p className="card-text">
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.416262043549!2d110.71732278392112!3d-7.563631928700346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14c37805c1b5%3A0x5027a76e356b340!2sPucangan%2C%20Kec.%20Kartasura%2C%20Kabupaten%20Sukoharjo%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1746837342025!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </p>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default BatasDesa
