import React from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import BeritaDesa from "../layout/BeritaDesa.jsx";
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';
const Berita = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-5">
        <br /><br /><br />
        <div className="container">
          <div className="  mt-6">
            <div className="berita-desa mb-5">
              <BeritaDesa />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Aduan />
            <EmergencyWa />
    </div>
  );
};

export default Berita;
