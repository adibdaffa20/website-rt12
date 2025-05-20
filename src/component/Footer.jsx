import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer w-100">
      <div className=" w-100 m-0 p-3">
        <div className="row m-0 p-3">
          <div className="col-md-4">
            <h5 className="text-uppercase">Desa Kalipuro</h5>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia libero, cum voluptates repudiandae odio fugit dolore nostrum dolorem consequatur non ad earum consequuntur iste laudantium cumque nemo hic assumenda ratione, quaerat dignissimos! Dolorum quas maiores distinctio, voluptatibus accusantium rem quaerat adipisci nobis optio. Id repellendus totam dolores suscipit accusantium.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Email:</p>
            <p>Phone:</p>
            <div className="sosmed">
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-reset">Home</a></li>
              <li><a href="#jelajah" className="text-reset">Jelajah</a></li>
              <li><a href="#berita-desa" className="text-reset">Berita Desa</a></li>
              <li><a href="#galeri-desa" className="text-reset">Galeri Desa</a></li>
              <li><a href="#beli-desa" className="text-reset">Beli Desa</a></li>
            </ul>
          </div>
        </div>
        <div className="row m-0 p-2 border-top text-center">
          <div className="col-md-6">
            <p className="m-0">© 2025 Desa Kalipuro</p>
          </div>
          <div className="col-md-6 ">
            <p className="m-0">Created by -</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
