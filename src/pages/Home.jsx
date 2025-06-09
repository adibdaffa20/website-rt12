import React from "react";

import Navbar from "../component/Navbar.jsx";
import Coursel from "../layout/Coursel.jsx";
import Sambutan from "../layout/Sambutan.jsx";
import BeritaDesaHome from "../layout/BeritaDesaHome.jsx";
import GaleriDesaHome from "../layout/GaleriDesaHome.jsx";
import BeliDesaHome from "../layout/BeliDesaHome.jsx";
import Footer from "../component/Footer.jsx";
// import Apbd from "../layout/Apbd.jsx";
import { motion } from "framer-motion";

import { zoomInOnScroll, slideInLeftOnScroll } from "../animasi/animations.jsx";
import "../style/Home.css"; // pastikan buat file CSS ini
import { Link } from "react-router-dom";

import { IconArrowBigRightLines } from "@tabler/icons-react";
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';

const Home = () => {
  return (
    <div>

      <Navbar />
      <section className="mt-6">
        <Coursel />
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="sambutan">
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="logo-desa2 text-center">
                 
                    <img src="img/logo2.png" alt="dd" />
                  
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="sambutan-1 d-flex justify-content-center align-items-center">


                  <div className="container">
                    <Sambutan />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="berita-desa">
            <BeritaDesaHome />
            <div className="d-flex justify-content-end mt-3">
              <Link
                to="/berita"
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Lihat Semua Berita <IconArrowBigRightLines color="#151B54" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="peta-desa">

            <motion.div {...zoomInOnScroll}>
              <h2>Peta RT 12 RW 06</h2>
              <p>Menampilkan Peta RT 12 RW 06 Sedati Gede </p>

              <div style={{ width: "100%", height: "450px" }}>
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
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="galeri-desa">
            <GaleriDesaHome />
            <div className="d-flex justify-content-end mt-3">
              <Link
                to="/galeri"
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Lihat Semua Galeri <IconArrowBigRightLines color="#151B54" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5"></section>

      <section className="mt-5">
        <div className="container">

          <div className="beli-desa">
            <motion.div {...slideInLeftOnScroll}>
              <h2>UMKM RT 12</h2>
              <p> Layanan yang disediakan promosi produk UMKM RT 12 sehingga mampu meningkatkan perekonomian masyarakat RT 12</p>
            </motion.div>
            <BeliDesaHome />
            <div className="d-flex justify-content-end mt-3">
              <Link
                to="/beli"
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Lihat Semua UMKM <IconArrowBigRightLines color="#151B54" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 ">
        <Footer />

      </section>
       <Aduan />
            <EmergencyWa />
    </div>
  );
};

export default Home;
