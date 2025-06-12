import React from 'react'
import { batasList } from '../../data/ProfileList';
import { motion } from "framer-motion";
import { slideInLeftOnScroll, slideInRightOnScroll } from "../../animasi/animations.jsx";
const BatasDesa = () => {
    return (
        <div className="batas-desa mt-5 mb-5">
            <motion.div {...slideInLeftOnScroll}>
            <h2>Peta dan Batas Wilayah RT 12</h2>
            </motion.div>
            <div className="row ">
                <div className="col-md-6 mt-2">
                    <motion.div {...slideInLeftOnScroll}>
                    <div className="card">
                        <div className="card-body">


                            <h5 className='text-center'> Batas Wilayah RT 12</h5>
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
                            <h5 className="card-title text-center">Peta RT 12</h5>
                            <p className="card-text">
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8007735430724!2d112.75876387504805!3d-7.376212592633221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4e2c56b72bd%3A0x3b38f1faf02f97e9!2sGg.%20Heppyy%2C%20Bono%2C%20Sedati%20Gede%2C%20Kec.%20Sedati%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061253!5e0!3m2!1sen!2sid!4v1749387203762!5m2!1sen!2sid"
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
