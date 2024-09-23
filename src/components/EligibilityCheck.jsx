import React, { useState } from 'react';

function EligibilityCheck() {
  const [formData, setFormData] = useState({
    charges: '',
    offenseType: '',
    timeServed: '',
    caseStatus: '',
    healthCondition: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., checking eligibility
    console.log('Form data submitted: ', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Bail Eligibility Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Charges:</label>
            <input
              type="text"
              name="charges"
              placeholder="Enter charges"
              value={formData.charges}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Offense Type:</label>
            <select
              name="offenseType"
              value={formData.offenseType}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Offense Type</option>
              <option value="minor">Minor Offense</option>
              <option value="major">Major Offense</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Time Served (in months):</label>
            <input
              type="number"
              name="timeServed"
              placeholder="Enter time served in months"
              value={formData.timeServed}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Case Status:</label>
            <select
              name="caseStatus"
              value={formData.caseStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Case Status</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Health Condition:</label>
            <select
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Health Condition</option>
              <option value="good">Good</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Check Eligibility
          </button>
        </form>
      </div>
    </div>
  );
}

export default EligibilityCheck;
