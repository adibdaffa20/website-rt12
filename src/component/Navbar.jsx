import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../assets/logo2.png";
import {
  IconHome,
  IconUser,
  IconChartInfographic,
  IconNews,
  IconX,
  IconShoppingBag, IconPhoto
} from "@tabler/icons-react";

const MotionDiv = motion.div;

const menuItems = [
  { label: "Home", path: "/", icon: <IconHome size={20} /> },
  { label: "Profile", path: "/profile", icon: <IconUser size={20} /> },
  { label: "Laporan", path: "/infografis", icon: <IconChartInfographic size={20} /> },
  { label: "Berita", path: "/berita", icon: <IconNews size={20} /> },
  { label: "UMKM", path: "/beli", icon: <IconShoppingBag size={20} /> },
  { label: "Galeri", path: "/galeri", icon: <IconPhoto size={20} /> },
];

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      <nav className={`navbar fixed-top shadow-sm px-5 py-3 ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="Logo" width="30" height="30" />
            RT 12 RW 06 Sedati Gede
          </NavLink>

          <button className="btn d-lg-none mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="d-none d-lg-flex gap-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `nav-link d-flex align-items-center gap-2 ${isActive ? "active" : ""}`}
                to={item.path}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>

          {isOpen && (
            <MotionDiv
              className="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <button
                className="btn align-self-end mb-2 p-0"
                onClick={toggleMenu}
                style={{ marginBottom: "10px" }}
                aria-label="Close menu"
              >
                <IconX size={24} />
              </button>

              <div className="w-100 d-flex flex-column gap-3">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    className={({ isActive }) =>
                      `fs-5 d-flex align-items-center gap-2 text-dark text-decoration-none ${isActive ? "active" : ""}`
                    }
                    to={item.path}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </MotionDiv>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
