import React, { useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import '../style/PageLayout.css';

function AdminLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className="admin-layout">
      <Sidebar 
        show={showSidebar} 
        onClose={closeSidebar} 
        collapsed={isMobile ? false : collapsed}
        toggleCollapse={toggleCollapse}
      />
      
      <div 
        className="main-content"
        style={{
          marginLeft: isMobile ? '0' : collapsed ? '70px' : '250px'
        }}
      >
        {isMobile && (
          <nav className="mobile-navbar">
            <button className="sidebar-toggle-mobile" onClick={toggleSidebar}>
              ☰
            </button>
          </nav>
        )}
        
        <div className="content-container">
          <div className="container p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;