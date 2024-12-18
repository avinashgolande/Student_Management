import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
//import Dropdown from './components/Dropdown';

const StudentSearch = () => {
  const [selectedField, setSelectedField] = useState(''); // Dropdown selection
  //const [inputValue, setInputValue] = useState(''); // Textbox input
  //const [student, setStudent] = useState(null);
  const [prn, setPrn] = useState('');
  const [student, setStudent] = useState(null);

  const handleSearch = async () => {
    if (!selectedField || !prn) {
      alert('Please select a field and enter a value.');
      return;
    }
    try {
      const encodedValue = encodeURIComponent(inputValue);
      console.log(`http://localhost:5000/students/getStudentBy${prn}`)
      const endpoint=`http://localhost:5000/students/${selectedField}/${encodedValue}`;
      console.log('Requesting:', endpoint);
      
      const { data } = await axios.get(endpoint);
      setStudent(data);
      setError(''); // Clear previous error
    } catch (error) {
      console.error('Error fetching student data:', error);
      setStudent(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md mt-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Search Student by criteria
        </h2>
        <div className="flex flex-col items-center space-y-4">
        {/* Dropdown for selecting field */}
        <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>Select Your Choice</option>
            <option value="First_Name">First_Name</option>
            <option value="Middle_Name">Middle_Name</option>
            <option value="Last_Name">Last_Name</option>
            <option value="Gender">Gender</option>
            <option value="Date_of_Birth">Date_of_Birth</option>
            <option value="Age">Age</option>
            <option value="Mobile_Number">Mobile_Number</option>
            <option value="EmailId">EmailId</option>
            <option value="Religion">Religion</option>
            <option value="Caste">Caste</option>
            <option value="Address">Address</option>
            <option value="Bloodgroup">Bloodgroup</option>
          </select>
          {/* Input for search value */}
          <input
            type="text"
            placeholder={`Enter ${selectedField || 'value'}`}
            //placeholder="Enter Value"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            disabled={!selectedField}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700 transition"
            disabled={!selectedField || !inputValue}
          >
            Search
          </button>
        </div>
        {/* Display student details */}
        {student ? (
          <div className="mt-8 p-4 bg-green-100 rounded">
            <h3 className="text-xl font-bold mb-4 text-green-700">Student Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>First_Name:</strong> {student.First_Name}</li>
              <li><strong>Middle_Name:</strong> {student.Middle_Name}</li>
              <li><strong>Last_Name:</strong> {student.Last_Name}</li>
              <li><strong>Gender:</strong> {student.Gender}</li>
              <li><strong>Date_of_Birth:</strong> {student.Date_of_Birth}</li>
              <li><strong>Age:</strong> {student.Age}</li>
              <li><strong>Mobile_Number:</strong> {student.Mobile_Number}</li>
              <li><strong>EmailID:</strong> {student.EmailId}</li>
              <li><strong>Reigion:</strong> {student.Religion}</li>
              <li><strong>Caste:</strong> {student.Caste}</li>
              <li><strong>Address:</strong> {student.Address}</li>
              <li><strong>Bloodgroup:</strong> {student.Bloodgroup}</li>
            </ul>
          </div>
        ) : error ? (
          <p className="mt-8 text-red-600">No details found for the given value.</p>
        ) : null}
      </div>
    </div>
  );
};

export default StudentSearch;