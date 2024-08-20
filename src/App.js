import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TableComponent from './TableComponent.jsx'; // Import the RandomTable component
import * as Sentry from '@sentry/react';
function App() {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {

    setShowTable(prevShowTable => !prevShowTable);  };
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleButtonClick}>
          Show Table
      </button>
      {showTable && <TableComponent />} {/* Conditionally render the table */}
      </header>
    </div>
  );
}

export default App;
