import React, { useState } from 'react';

const BailApplicationForm = () => {
  const [sonOf, setSonOf] = useState("");
  const [residence, setResidence] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [offence, setOffence] = useState("");
  const [ipcSection, setIpcSection] = useState("");
  const [crpcSection, setCrpcSection] = useState("");
  const [amount, setAmount] = useState("");
  const [suretyName, setSuretyName] = useState("");
  const [suretySonOf, setSuretySonOf] = useState("");
  const [suretyResidence, setSuretyResidence] = useState("");
  const [courtOfficer, setCourtOfficer] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [documents, setDocuments] = useState(null);
  const [fees, setFees] = useState("");
  
  const handleFileUpload = (e) => {
    setDocuments(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form details
    console.log({
      sonOf,
      residence,
      policeStation,
      offence,
      ipcSection,
      crpcSection,
      amount,
      suretyName,
      suretySonOf,
      suretyResidence,
      courtOfficer,
      lawyerName,
      documents,
      fees,
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Bail Application Form</h2>
        <form onSubmit={handleSubmit}>

          {/* Bail Applicant Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Son Of</label>
              <input
                type="text"
                value={sonOf}
                onChange={(e) => setSonOf(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Residence</label>
              <input
                type="text"
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Police Station</label>
              <input
                type="text"
                value={policeStation}
                onChange={(e) => setPoliceStation(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Offence</label>
              <input
                type="text"
                value={offence}
                onChange={(e) => setOffence(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">IPC Section</label>
              <input
                type="text"
                value={ipcSection}
                onChange={(e) => setIpcSection(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Cr.PC Section</label>
              <input
                type="text"
                value={crpcSection}
                onChange={(e) => setCrpcSection(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
          </div>

          {/* Bail Bond Amount */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Bail Bond Amount (Rs.)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          {/* Surety Information */}
          <h3 className="text-xl font-bold mb-4">Surety Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Surety Name</label>
              <input
                type="text"
                value={suretyName}
                onChange={(e) => setSuretyName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Surety Son Of</label>
              <input
                type="text"
                value={suretySonOf}
                onChange={(e) => setSuretySonOf(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Surety Residence</label>
              <input
                type="text"
                value={suretyResidence}
                onChange={(e) => setSuretyResidence(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
          </div>

          {/* Court Officer */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Court Officer</label>
            <input
              type="text"
              value={courtOfficer}
              onChange={(e) => setCourtOfficer(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          {/* Lawyer Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Lawyer Name</label>
            <input
              type="text"
              value={lawyerName}
              onChange={(e) => setLawyerName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Upload Documents */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Upload Documents</label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          {/* Payment Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Pay Fees (Rs.)</label>
            <input
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <img
              src="https://dummyimage.com/300x150/000/fff&text=Payment+Gateway"
              alt="Payment Gateway"
              className="mt-4"
            />
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Signature of Lawyer</label>
              <input
                type="text"
                placeholder="Lawyer's Signature"
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Signature of Prisoner</label>
              <input
                type="text"
                placeholder="Prisoner's Signature"
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded py-3 hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BailApplicationForm;
