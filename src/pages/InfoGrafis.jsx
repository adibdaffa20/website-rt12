import React from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import '../style/Tabs.css';

import DataPendidikan from "../layout/infografis/JumlahPendidikan.jsx";
import JumlahPerkerjaan from "../layout/infografis/JumlahPerkerjaan.jsx";
import JumlahPerkawinan from "../layout/infografis/JumlahPerkawinan.jsx";
import JumlahAgama from "../layout/infografis/JumlahAgama.jsx";

import Apbd from "../layout/infografis/Apbd.jsx";
import Stanting from "../layout/infografis/Stanting.jsx";
import Bansos from "../layout/infografis/Bansos.jsx";
import Idm from "../layout/infografis/Idm.jsx";

import JumlahPenduduk from "../layout/infografis/JumlahPenduduk.jsx";

import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';
import Sidebar from "../component/Sidebar.jsx";


const InfoGrafis = () => {


  return (
    <div>
      <Navbar />
      <section className="mt-5">
        <div className="container ">
          <div className="row mb-5">
            <div className="col-md-12 mt-5 mb-4 text-center info-grafis">
              <div className="card ">
                <div className="card-body">
                  <h2 className="card-title ">Informasi</h2>
                  <p className="card-text">
                    Berikut sejumlah informasi yang ada di RT 12
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                {/* <Tab eventKey="home" title="Program Kerja">
                  <section>
                    <div className="container mt-5 mb-5">
                     
                      <div className="row">
                        <div className="col-md-12">
                          <JumlahPenduduk />
                        </div>

                        <div className=" mt-5">
                          <DataPendidikan />
                        </div>
                      </div>

                      <div className=" mt-5">
                        <JumlahPerkerjaan />
                      </div>

                      <div className=" mt-5">
                        <JumlahPerkawinan />
                      </div>
                      <div className=" mt-5">
                        <JumlahAgama />
                      </div>
                    </div>
                  </section>
                </Tab> */}

                <Tab eventKey="profile" title="Buku Pedoman">
                  <section>
                    <Apbd />
                  </section>
                </Tab>
                <Tab eventKey="longer-tab" title="Program Kerja">
                  <section>
                    <div className=" mt-5 mb-5">
                      <Stanting />
                    </div>
                  </section>
                </Tab>
                <Tab eventKey="contact" title="Laporan Keuangan">
                  <section>
                    <div className=" mt-5 mb-5">
                      <Bansos />
                    </div>
                  </section>
                </Tab>

                {/* <Tab eventKey="idm" title="IDM">
                  <section>
                    <div className="container mt-5 mb-5">
                      <Idm />
                    </div>
                  </section>
                </Tab> */}
              </Tabs>
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

export default InfoGrafis;