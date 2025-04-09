import React from "react";

function DynamicTable({ tableName, columns, data }) {
  return (
    <div className="mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-3 text-center">{tableName} Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-white">
              {columns.map((col, index) => (
                <th key={index} className="border border-gray-600 p-3 text-center">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-4 text-center text-gray-400">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className={`text-white ${rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} hover:bg-gray-600 transition`}
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="border border-gray-600 p-3 text-center">{row[col]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DynamicTable;
