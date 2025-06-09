import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import InfoGrafis from '../pages/InfoGrafis.jsx';
import Berita from '../pages/Berita.jsx';
import BeritaDetail from '../pages/BeritaDetail.jsx';
import BeliDesa from '../pages/BeliDesa.jsx';
import BeliDetail from '../pages/BeliDetail.jsx';
import GaleriDesa from '../pages/GaleriDesa.jsx';
import ScrollToTop from '../component/ScrollToTop.jsx';
import Login from '../pages/Login.jsx'

import AdminLayout from '../pages/AdminLayout.jsx';
import AdminDashboard from '../layout/admin/Dashboard.jsx';
import AdminBerita from '../layout/admin/Berita.jsx';
import AdminGaleri from '../layout/admin/Galeri.jsx';
import AdminUmkm from '../layout/admin/Umkm.jsx';
import AdminPenduduk from '../layout/admin/Penduduk.jsx';
import AdminStruktur from '../layout/admin/Struktur.jsx';
import AdminApbdes from '../layout/admin/Apbdes.jsx';
import AdminProfile from '../layout/admin/Profile.jsx';
import AdminStunting from '../layout/admin/Stunting.jsx';
import AdminBansos from '../layout/admin/Bansos.jsx';
import AdminIdm from '../layout/admin/Idm.jsx';
import AdminAduan from '../layout/admin/Aduan.jsx';
import AdminNomorDarurat from '../layout/admin/NomorDarurat.jsx';


import UmkmLayout from '../pages/UmkmLayout.jsx';
import UmkmDashboard from '../layout/umkm/Dashboard.jsx';
import UmkmProduk from '../layout/umkm/Produk.jsx';
import UmkmProfile from '../layout/umkm/Profile.jsx';
function Index() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/infografis" element={<InfoGrafis />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/beli" element={<BeliDesa />} />
        <Route path="/beli/:id" element={<BeliDetail />} />
        <Route path="/galeri" element={<GaleriDesa />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<AdminDashboard />} />
          <Route path="berita" element={<AdminBerita />} />
          <Route path="galeri" element={<AdminGaleri />} />
          <Route path="umkm" element={<AdminUmkm />} />
          <Route path="penduduk" element={<AdminPenduduk />} />
          <Route path="struktur" element={<AdminStruktur />} />
          <Route path="apbdes" element={<AdminApbdes />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="stunting" element={<AdminStunting />} />
          <Route path="bansos" element={<AdminBansos />} />
          <Route path="idm" element={<AdminIdm />} />
          <Route path="aduan" element={<AdminAduan />} />
          <Route path="nomor-darurat" element={<AdminNomorDarurat />} />
        </Route>


        <Route path="/umkm" element={<UmkmLayout />} >
          <Route index element={<UmkmDashboard />} />
          <Route path="produk" element={<UmkmProduk />} />
          <Route path="profile" element={<UmkmProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default Index;