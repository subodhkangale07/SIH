import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JudicialPage from './components/JudicialPage';
import BailApplicationForm from './components/BailApplicationForm';
import BailStatusPage from './components/BailStatusPage';
import Navbar from './components/Navbar1';
import Footer from './components/Footer';
import Home from './components/Home';
import EligibilityCheck from './components/EligibilityCheck';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-for-bail" element={<BailApplicationForm />} />
        <Route path="/judicial-page" element={<JudicialPage />} />
        <Route path="/bail-status" element={<BailStatusPage />} />
        <Route path='/eligibility-check' element={<BailStatusPage/>}></Route>
        <Route path='/bailStatus' element={<JudicialPage/>}></Route>
        <Route path='/Eligibility-Check1' element={<EligibilityCheck/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
