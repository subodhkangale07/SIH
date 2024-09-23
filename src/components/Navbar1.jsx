import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-2 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Government Logo" className="h-10 mr-3" />
          <h1 className="font-bold text-xl">Government Of India </h1>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/apply-for-bail" className="hover:underline">Apply for Bail</Link></li>
          <li><Link to="/eligibility-check" className="hover:underline">Check History & Status</Link></li>
          <li><Link to="/bailStatus" className="hover:underline">Bail Verdict by Judicial Board</Link></li>
          <li><Link to="/Eligibility-Check1" className="hover:underline">Eligibility Check </Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
