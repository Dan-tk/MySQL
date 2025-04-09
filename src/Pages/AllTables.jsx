/* import { useState, useEffect } from "react";
import axios from "../axios"; 
import DynamicTable from "../Components/DynamicTable";

function AllTables({endpoint, title}) {
  const [tables, setTables] = useState({});

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(endpoint);
       

       console.log("hellloo")
        const tableObject = { [title]: response.data}
        setTables(tableObject); 

      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  return (
    <div className="p-4">
      {Object.entries(tables).map(([tableName, tableData], index) => (
        <div key={index} className="mb-6">
          <DynamicTable
            tableName={tableName}
            columns={tableData.length > 0 ? Object.keys(tableData[0]) : []}
            data={tableData}
          />
        </div>
      ))}
    </div>
  );
}

export default AllTables;
 */

import { useState, useEffect } from "react";
import axios from "../axios"; 
import DynamicTable from "../Components/DynamicTable";

function AllTables({ endpoint, title }) {
  const [tables, setTables] = useState({});
  const [isInvalidData, setIsInvalidData] = useState(false);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(endpoint);

        if (Array.isArray(response.data)) {
          const tableObject = { [title]: response.data };
          setTables(tableObject);
          setIsInvalidData(false); // valid data
        } else {
          setIsInvalidData(true); // invalid format
        }
      } catch (error) {
        console.error("Error fetching tables:", error);
        setIsInvalidData(true);
      }
    };

    fetchTables();
  }, [endpoint, title]);

  if (isInvalidData) {
    return (
      <div className="p-4 text-white bg-gray-800 rounded-md shadow-md text-center">
        No Records found
      </div>
    );
  }

  return (
    <div className="p-4">
      {Object.entries(tables).map(([tableName, tableData], index) => (
        <div key={index} className="mb-6">
          <DynamicTable
            tableName={tableName}
            columns={tableData.length > 0 ? Object.keys(tableData[0]) : []}
            data={tableData}
          />
        </div>
      ))}
    </div>
  );
}

export default AllTables;
