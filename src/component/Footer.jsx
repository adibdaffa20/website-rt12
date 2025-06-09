import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer w-100">
      <div className=" w-100 m-0 p-3">
        <div className="row m-0 p-3">
          <div className="col-md-4">
            <h5 className="text-uppercase">RT 12 RW 06 Sedati Gede</h5>
            <p> Jl. H. Abd Rahman 69E Sedati Gede, Kecamatan Sedati, Kabupaten Sidoarjo, 61253.
            </p>
          </div>
          
        </div>
        <div className="row m-0 p-2 border-top text-center">
          <div className="col-md-6">
            <p className="m-0">© 2025 RT 12 RW 06 Sedati Gede</p>
          </div>
          <div className="col-md-6 ">
            <p className="m-0">Developed by Karang Taruna RT 12 ♡</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
