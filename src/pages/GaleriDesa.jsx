import React from 'react'
import Galeri from '../layout/GaleriDesa.jsx'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'

const GaleriDesa = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5 mb-5">
                <Galeri />
            </div>
            <Footer />
        </div>
    );
};

export default GaleriDesa
