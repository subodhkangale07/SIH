import React, { useState, useEffect } from 'react';

const BailStatusPage = () => {
  const [bailStatus, setBailStatus] = useState(null);
  const [history, setHistory] = useState([]);
  const [applications, setApplications] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [user] = useState({
    name: 'Abc Doexyz ',
    photo: 'https://via.placeholder.com/150' // Replace with actual photo URL
  });

  useEffect(() => {
    // Fetch initial data (replace with actual API calls)
    fetchBailStatus();
    fetchBailHistory();
    fetchBailApplications();
  }, []);

  const fetchBailStatus = async () => {
    // Simulate fetching bail status
    const status = "Pending"; // Replace with API call
    setBailStatus(status);
  };

  const fetchBailHistory = async () => {
    // Simulate fetching bail history
    const historyData = [
      { date: '2024-01-01', status: 'Application Submitted' },
      { date: '2024-01-10', status: 'Hearing Scheduled' },
      // Add more entries as needed
    ]; // Replace with API call
    setHistory(historyData);
  };

  const fetchBailApplications = async () => {
    // Simulate fetching bail applications data
    const applicationsData = [
      { id: 1, date: '2023-12-15', status: 'Approved', approvalDate: '2024-01-01' },
      { id: 2, date: '2024-01-05', status: 'Rejected', approvalDate: 'N/A' },
      { id: 3, date: '2024-02-10', status: 'Pending', approvalDate: 'N/A' },
      { id: 4, date: '2024-03-01', status: 'Approved', approvalDate: '2024-03-15' },
      { id: 5, date: '2024-04-10', status: 'Pending', approvalDate: 'N/A' }
    ]; // Replace with API call
    setApplications(applicationsData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Bail Reckoner</h1>

        {/* User Profile Section */}
        <div className="mb-6 flex items-center space-x-4">
          <img
            src={user.photo}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-lg text-gray-600">Additional details about the user can go here.</p>
          </div>
        </div>

        {/* Bail Status Section */}
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700">
          <h2 className="text-2xl font-semibold mb-2">Bail Status</h2>
          <p className="text-lg">{bailStatus ? bailStatus : "Loading..."}</p>
        </div>

        {/* Bail History Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Bail Application History</h2>
          <ul className="list-disc pl-5">
            {history.length > 0 ? (
              history.map((entry, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{entry.date}:</span> {entry.status}
                </li>
              ))
            ) : (
              <li>No history available</li>
            )}
          </ul>
        </div>

        {/* Bail Applications Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Bail Applications Overview</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">Application Date</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Approval/Rejection Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <tr key={app.id}>
                    <td className="py-2 px-4 border-b">{app.date}</td>
                    <td className="py-2 px-4 border-b">{app.status}</td>
                    <td className="py-2 px-4 border-b">{app.approvalDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-2 px-4 border-b text-center">No applications available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Additional Information Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Add any additional information here..."
          />
        </div>
      </div>
    </div>
  );
};

export default BailStatusPage;
