import React from 'react';
import supCrtImg from '../assets/SupCort.jpeg';

const Home = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Header Section */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Welcome to Bail Reckoner</h2>
      <div className="flex justify-center mb-8">
        <img className="w-screen  lg:w-screen rounded-lg shadow-md" src={supCrtImg} alt="Supreme Court" />
      </div>
      <div className="container mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          The Bail Reckoner is an innovative digital solution designed to assist undertrial prisoners, legal aid providers, and judicial authorities in streamlining the bail process.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Key Features of Bail Reckoner</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Legal Provisions */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Legal Provisions</h4>
            <p className="text-gray-600">
              Detailed mapping of various statutes like the Indian Penal Code, 1860, Bhartiya Nyaya Sanhita 2023, and others. 
              Covers offenses such as cybercrimes, crimes against women, children, and economic offenses.
            </p>
          </div>

          {/* Card 2: Time Served Tracker */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Time Served Tracker</h4>
            <p className="text-gray-600">
              Track the duration of imprisonment for undertrial prisoners and highlight their eligibility timeline for bail based on time already served.
            </p>
          </div>

          {/* Card 3: Judge’s Discretion */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Judge’s Discretion</h4>
            <p className="text-gray-600">
              Assess the risk factors like potential escape or tampering with evidence to assist in judicial decision-making.
            </p>
          </div>

          {/* Card 4: Procedural Requirements */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Procedural Requirements</h4>
            <p className="text-gray-600">
              Ensure compliance with surety bonds, personal bonds, and other procedural prerequisites under the CrPC for a smooth bail process.
            </p>
          </div>

          {/* Card 5: Judicial Pronouncements */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Judicial Pronouncements</h4>
            <p className="text-gray-600">
              Access key judicial pronouncements and decisions regarding bail eligibility and align them with undertrial prisoners' cases.
            </p>
          </div>

          {/* Card 6: Real-time Bail Status */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Real-time Bail Status</h4>
            <p className="text-gray-600">
              Get real-time updates and statuses of undertrial prisoners' bail applications and their progress through the judicial process.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto text-center mt-12">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Bail Reckoner. All rights reserved. Designed to make the bail process more transparent, efficient, and just.
        </p>
      </div>
    </div>
  );
};

export default Home;
