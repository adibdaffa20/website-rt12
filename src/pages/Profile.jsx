import React from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import VisiMisi from "../layout/profile/VisiMisi.jsx";
import Bagan from "../layout/profile/Bagan.jsx";
import Sejarah from "../layout/profile/Sejarah.jsx";
import Keunggulan from "../layout/profile/Keunggulan.jsx";
import BatasDesa from "../layout/profile/BatasDesa.jsx";
import CardJabatan from "../layout/profile/CardCarousel.jsx";
import "../style/Profile.css";
import { motion } from "framer-motion";
import { zoomInOnScroll } from "../animasi/animations.jsx";

import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';

const Profile = () => {
  return (
    <div>
      <Navbar />

      <section className="mt-5">
        <div className="container "> 
          
          <VisiMisi />
        </div>
      </section>

      <section className="mt-5 sjr pt-3 pb-3 mb-5">
        <div className="container">
          <div className="logo-desa text-center">
<motion.div {...zoomInOnScroll}>
            <img src="img/logo2.png" alt="dd" />
</motion.div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 mt-2">
              <Sejarah />
            </div>
            <div className="col-md-6 mt-2 mb-5">
              <Keunggulan />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 ">
        <div className="container">
          <Bagan />
        </div>
      </section>

      <section className="sjr mt-5 mb-4 pt-3 pb-3">
        <div className="container">
          <BatasDesa />
        </div>
      </section>

      <section className="mt-5 mb-4 pt-3 pb-3">
        <div className="container">
          <CardJabatan />
        </div>
      </section>

      <Footer />
       <Aduan />
                  <EmergencyWa />
    </div>
  );
};

export default Profile;
