import React from 'react';
import '../style/Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
  IconLayoutDashboard,
  IconNews,
  IconPhoto,
  IconBuildingStore,
  IconUser,
  IconHierarchy,
  IconUsersGroup,
  IconReportMoney,
  IconHeartbeat,
  IconHandStop,
  IconChartRadar,
  IconLogout,
  IconMessageReport,
  IconEmergencyBed
} from '@tabler/icons-react';

function Sidebar({ show, onClose, collapsed, toggleCollapse }) {
  return (
    <>
      {/* Overlay hanya muncul di mobile saat sidebar aktif */}
      {show && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar-container ${show ? 'show' : ''} ${collapsed ? 'collapsed' : ''} no-scrollbar`}>
  
        <div className="sidebar-content h-100 d-flex flex-column">
          {/* Header Sidebar */}
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            {!collapsed && <h4 className="text-white m-0">Admin Desa</h4>}
            <button 
              className="sidebar-toggle-btn btn  text-white p-0"
              onClick={toggleCollapse}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? '>>' : '<<'}
            </button>
          </div>

          {/* Menu Items */}
          <ul className="nav flex-column flex-grow-1">
            <li className="nav-item">
              <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconLayoutDashboard size={20} />
                <span className="menu-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="berita" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconNews size={20} />
                <span className="menu-text">Berita</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="galeri" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconPhoto size={20} />
                <span className="menu-text">Galeri</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="umkm" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconBuildingStore size={20} />
                <span className="menu-text">UMKM</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconUser size={20} />
                <span className="menu-text">Profil</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="struktur" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconHierarchy size={20} />
                <span className="menu-text">Struktur</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="penduduk" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconUsersGroup size={20} />
                <span className="menu-text">Penduduk</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="apbdes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconReportMoney size={20} />
                <span className="menu-text">APBDes</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="stunting" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconHeartbeat size={20} />
                <span className="menu-text">Stunting</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="bansos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconHandStop size={20} />
                <span className="menu-text">Bansos</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="idm" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconChartRadar size={20} />
                <span className="menu-text">IDM</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="nomor-darurat" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconEmergencyBed size={20} />
                <span className="menu-text">No Darurat</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="aduan" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconMessageReport size={20} />
                <span className="menu-text">Aduan</span>
              </NavLink>
            </li>

            {/* Logout di bagian bawah */}
            <li className="nav-item mt-auto">
              <NavLink to="/logout" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconLogout size={20} />
                <span className="menu-text">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;