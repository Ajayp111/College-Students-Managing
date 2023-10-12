import React, { useState } from "react";
import studentsData from "../Data/data.json";
import branchData from "../Data/branchData.json";

function StudentList() {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name"); // Track search type: "name" or "roll number"

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const uniqueBranches = [
    ...new Set(studentsData.map((student) => student.branch)),
  ];

  const getHODAndCRNames = (branch) => {
    const branchInfo = branchData.find((e) => e.branch === branch);
    return branchInfo || { hod: "HOD Not Found", cr: "CR Not Found" };
  };

  const { hod, cr } =
    selectedBranch === "All" ? {} : getHODAndCRNames(selectedBranch);

  const filteredStudents = studentsData
    .filter(
      (student) => selectedBranch === "All" || student.branch === selectedBranch
    )
    .filter((student) =>
      searchType === "name"
        ? student.name.toLowerCase().includes(searchTerm.toLowerCase())
        : student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Student List</h1>

      <div className="flex items-center space-x-4 mb-4">
        <label className="font-bold" htmlFor="branchFilter">
          Filter by Branch:
        </label>
        <select
          id="branchFilter"
          onChange={handleBranchChange}
          value={selectedBranch}
          className="border p-2 rounded-md"
        >
          <option value="All">All</option>
          {uniqueBranches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      {selectedBranch !== "All" && (
        <div className="mb-4 md:m-4 ">
          <p className="block text-lg font-bold mb-2">HOD: {hod}</p>
          <p className="block text-lg font-bold mb-2">CR: {cr}</p>
        </div>
      )}

      {/* Search bar and type selection */}
      <div className="mb-4 flex gap-4 pl-9">
        <div>
          <label>
            Search by:
            <select
              onChange={(e) => handleSearchTypeChange(e.target.value)}
              value={searchType}
              className="border p-2 rounded-md"
            >
              <option value="name">Name</option>
              <option value="rollNumber">Roll Number</option>
            </select>
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder={`Search by ${
              searchType === "name" ? "name" : "roll number"
            }`}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredStudents.map((student, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <img src={student.image} alt={`${student.name}'s image`} />
            <strong className="block text-lg font-semibold mb-2">Name:</strong>
            {student.name}
            <br />
            <strong className="block text-lg font-semibold mb-2">
              Roll Number:
            </strong>
            {student.rollNumber}
            <br />
            <strong className="block text-lg font-semibold mb-2">
              Branch:
            </strong>
            {student.branch}
            <br />
            <strong className="block text-lg font-semibold mb-2">
              Subjects:
            </strong>
            <ul>
              <li>{student.subjects}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
