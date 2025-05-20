import React from 'react';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import { IconLogin, IconMail, IconLock } from '@tabler/icons-react';
import '../style/Login.css'
import Aduan from './Aduan.jsx';
import EmergencyWa from './EmergencyWa.jsx';

const Login = () => {
    return (
        <div >
            <Navbar />
            <div className="container login mt-5 pt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg p-4 rounded-4 w-100" style={{ maxWidth: '450px' }}>
                    <div className="text-center mb-4">
                       
                        <h2 className="fw-bold">Login</h2>
                        <p className="text-muted">Welcome back! Please enter your details.</p>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <div className="input-group">
                                <span className="input-group-text "><IconMail size={20} className="text-white" /></span>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <span className="input-group-text "><IconLock size={20} className="text-white" /></span>
                                <input type="password" className="form-control" id="password" placeholder="••••••••" />
                            </div>
                        </div>
                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                              <IconLogin size={36} className="text-white " />
  Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <Aduan />
            <EmergencyWa />
        </div>
    );
};

export default Login;
