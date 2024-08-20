import React, {useEffect} from "react";
import * as Sentry from "@sentry/react";

// Helper function to generate random data for table
const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(Math.floor(Math.random() * 100) + 1);
    }
    data.push(row);
  }
  return data;
};

const TableComponent = () => {
    
    const span1 = Sentry.startInactiveSpan({
        name: "TableComponent",
        op: "ui.react.mount"
    })

    const tableData = generateRandomData();

useEffect(() => {
  
  const fetchData = async () => {
    return Sentry.withActiveSpan(span1, async () => {
    
      await fetch('https://jsonplaceholder.typicode.com/posts/1');

    })
  };
  
  Promise.all([fetchData()]).finally(() => {

    span1.end()

  })

  }, []); 


  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "200px", textAlign: "center" }}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// export default Sentry.withProfiler(TableComponent); 
export default TableComponent;

