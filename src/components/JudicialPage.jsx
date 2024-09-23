import React, { useState } from 'react';

function JudicialPage() {
  const [decision, setDecision] = useState('');
  const [remarks, setRemarks] = useState('');
  const [applicationDate] = useState('1st Sept 2024');
  const [currentDate] = useState(new Date().toLocaleDateString());
  const [feesPaid, setFeesPaid] = useState('');
  const [publicSafetyRisk, setPublicSafetyRisk] = useState('');
  const [pastCriminalRecord, setPastCriminalRecord] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [custodyDuration, setCustodyDuration] = useState('');
  const [pastConvictions, setPastConvictions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Decision:', decision, 'Remarks:', remarks);
    console.log('Fees Paid:', feesPaid, 'Public Safety Risk:', publicSafetyRisk);
    console.log('Past Criminal Record:', pastCriminalRecord, 'Health Condition:', healthCondition);
    console.log('Custody Duration:', custodyDuration, 'Past Convictions:', pastConvictions);
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded p-8 ">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Review Bail Application</h2>

        {/* Applicant Information */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Applicant Information</h3>
          <div className="flex space-x-4 mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Applicant ID"
              className="w-24 h-24 rounded-lg shadow"
            />
            <div>
              <p><strong>Name:</strong> Raju Kumar</p>
              <p><strong>Age:</strong> 30</p>
              <p><strong>Address:</strong> 123 Example St, Cityville</p>
              <p><strong>Application Date:</strong> {applicationDate}</p>
              <p><strong>Current Date:</strong> {currentDate}</p>
            </div>
          </div>

          {/* Lawyer Information */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Lawyer Information</h4>
            <p><strong>Lawyer Name:</strong> Kaju Patel</p>
            <p><strong>Contact:</strong> +91 9876543210</p>
            <p><strong>Sign:</strong> ______________</p>
          </div>

          {/* Legal Section Information */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Legal Information</h4>
            <p><strong>IPC Section:</strong> Section 420 (Cheating)</p>
            <p><strong>CRPC Section:</strong> Section 437 (Bail in Non-Bailable Cases)</p>
          </div>

          {/* Surity Providers */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Surity Providers</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Person 1: <strong>Name:</strong> Michael Ross, <strong>Contact:</strong> +91 9123456780</li>
              <li>Person 2: <strong>Name:</strong> Harvey Specter, <strong>Contact:</strong> +91 9123456781</li>
            </ul>
            <p className="mt-2"><strong>Affidavit:</strong> <button href='/' download className="text-blue-600 hover:underline">View Affidavit.pdf</button></p>
          </div>

          {/* Crime Type and Bailability */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Crime Details</h4>
            <p><strong>Offence Type:</strong> Non-Bailable</p>
            <p><strong>Special Crime:</strong> None</p>
          </div>

          {/* Additional Information */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Additional Information</h4>
            <p><strong>Fees Paid:</strong> ₹ {feesPaid}</p>
            <p><strong>Public Safety Risk:</strong> {publicSafetyRisk}</p>
            <p><strong>Past Criminal Record:</strong> {pastCriminalRecord}</p>
            <p><strong>Health Condition:</strong> {healthCondition}</p>
            <p><strong>Custody Duration:</strong> {custodyDuration} months</p>
            <p><strong>Past Convictions:</strong> {pastConvictions}</p>
          </div>

          {/* Signatures */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Signatures</h4>
            <p><strong>Lawyer's Signature:</strong> ______________</p>
            <p><strong>Prisoner's Signature:</strong> ______________</p>
          </div>

          {/* Documents Section */}
          <h4 className="text-lg font-bold mb-2">Submitted Documents</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <button download className="text-blue-600 hover:underline">
                ID Proof (ID_proof.pdf)
              </button>
            </li>
            <li>
              <button  download className="text-blue-600 hover:underline">
                Bail Application (bail_application.pdf)
              </button>
            </li>
            <li>
              <button  download className="text-blue-600 hover:underline">
                Supporting Evidence (supporting_evidence.jpg)
              </button>
            </li>
          </ul>
        </div>

        {/* Decision Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Judicial Decision</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Decision Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Decision</label>
              <select
                value={decision}
                onChange={(e) => setDecision(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              >
                <option value="">Select Decision</option>
                <option value="approved">Approve</option>
                <option value="rejected">Reject</option>
              </select>
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Remarks</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter remarks"
                rows="5"
                required
              />
            </div>

            {/* Additional Fields */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Fees Paid (₹)</label>
              <input
                type="text"
                value={feesPaid}
                onChange={(e) => setFeesPaid(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Public Safety Risk</label>
              <input
                type="text"
                value={publicSafetyRisk}
                onChange={(e) => setPublicSafetyRisk(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Past Criminal Record</label>
              <input
                type="text"
                value={pastCriminalRecord}
                onChange={(e) => setPastCriminalRecord(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Health Condition</label>
              <input
                type="text"
                value={healthCondition}
                onChange={(e) => setHealthCondition(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Custody Duration (months)</label>
              <input
                type="number"
                value={custodyDuration}
                onChange={(e) => setCustodyDuration(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Past Convictions</label>
              <input
                type="text"
                value={pastConvictions}
                onChange={(e) => setPastConvictions(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded py-2"
              >
                Submit Decision
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JudicialPage;
