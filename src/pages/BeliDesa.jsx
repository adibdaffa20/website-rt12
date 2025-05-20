import React from 'react'
import BeliDesaL from '../layout/BeliDesa.jsx'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';
const BeliDesa = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-5">
        <BeliDesaL />
      </div>
      <Footer />
        <Aduan />
            <EmergencyWa />
    </div>
  )
}

export default BeliDesa
