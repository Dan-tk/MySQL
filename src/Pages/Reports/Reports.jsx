/*
import React from "react";
import axios from "../../axios"; 

function Reports() {
  //Report NAmes
  const reports = [
    "AlumniDirectory",
    "AlumnisBetween2005and2015",
    "awardsBetween2020and2022",
    "meruAndNairobiChapters", 
    "otherInstitutions",
    "TechnologyAlumnis",
    "upcomingEvents"
  ];

  // Function 4 report download
  const handleDownload = async (reportName) => {
    try {
      const response = await axios.get(`/reports/${reportName}`, {
        responseType: "blob", // expect binary data
      });

      if (response.status === 200) {
        // link 2 download file
         const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = `${reportName}.pdf`; 
        document.body.appendChild(a);
        a.click();
        a.remove(); 
      } else {
        console.error("Failed to fetch the report");
      }
    } catch (error) {
      console.error("Error downloading report:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Alumnii Reports</h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="space-y-6">
          {reports.map((report) => (
            <li
              key={report}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <span className="text-lg text-white">{report}</span>
              <button
                onClick={() => handleDownload(report)}
                className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reports;
*/

import React, { useState } from "react";
import axios from "../../axios";

function Reports() {
  const reports = [
    "AlumniDirectory",
    "AlumnisBetween2005and2015",
    "awardsBetween2020and2022",
    "meruAndNairobiChapters",
    "otherInstitutions",
    "TechnologyAlumnis",
    "upcomingEvents",
  ];

  const [downloadStatus, setDownloadStatus] = useState({});

  const handleDownload = async (reportName) => {
    try {
      const response = await axios.get(`/reports/${reportName}`, {
        responseType: "blob",
      });

      const contentType = response.headers["content-type"];
      if (response.status === 200 && contentType === "application/pdf") {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = `${reportName}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();

        setDownloadStatus((prev) => ({ ...prev, [reportName]: "valid" }));
      } else {
        setDownloadStatus((prev) => ({ ...prev, [reportName]: "invalid" }));
      }
    } catch (error) {
      console.error("Error downloading report:", error);
      setDownloadStatus((prev) => ({ ...prev, [reportName]: "invalid" }));
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Alumnii Reports</h2>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="space-y-6">
          {reports.map((report) => (
            <li key={report}>
              <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                <span className="text-lg text-white">{report}</span>
                <button
                  onClick={() => handleDownload(report)}
                  className={`${
                    downloadStatus[report] === "invalid"
                      ? "bg-red-700 hover:bg-red-600"
                      : "bg-indigo-600 hover:bg-blue-700"
                  } text-white py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 cursor-pointer`}
                >
                  {downloadStatus[report] === "invalid" ? "Invalid Download" : "DOWNLOAD"}
                </button>
              </div>

              {downloadStatus[report] === "invalid" && (
                <div className="mt-2 text-red-400 text-sm text-center">
                  No records found; thus PDF cannot be generated.
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reports;
