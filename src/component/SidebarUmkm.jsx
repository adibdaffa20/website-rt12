import React from 'react';
import '../style/Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
  IconLayoutDashboard,
  IconBuildingStore,
  IconLogout, IconUser
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
            {!collapsed && <h4 className="text-white m-0">UMKM Panel</h4>}
            <button 
              className="sidebar-toggle-btn btn text-white p-0"
              onClick={toggleCollapse}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? '>>' : '<<'}
            </button>
          </div>

          {/* Menu Items */}
          <ul className="nav flex-column flex-grow-1">
            <li className="nav-item">
              <NavLink to="/umkm" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconLayoutDashboard size={20} />
                <span className="menu-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="produk" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconBuildingStore size={20} />
                <span className="menu-text">Produk</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                <IconUser size={20} />
                <span className="menu-text">Profile</span>
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