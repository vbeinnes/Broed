import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(10);
  const [numberOfBreads, setNumberOfBreads] = useState(0);

  // Function to calculate the number of breads needed
  const calculateBreadsNeeded = (value) => {
    let breadsNeeded;
    if (value === 0) {
      breadsNeeded = 1; // Minimum one bread needed
    } else {
      breadsNeeded = value / 10 * 3; // Calculate based on formula
      const remainder = breadsNeeded % 1; // Get decimal part
      if (value > 10) {
        if (remainder > 0.4) {
          breadsNeeded = Math.ceil(breadsNeeded); // Round up if decimal part > 0.4
        }
        else {
          breadsNeeded = Math.floor(breadsNeeded); // Round down otherwise
        }
      } else {
        if (remainder > 0.2) {
          breadsNeeded = Math.ceil(breadsNeeded); // Round up if decimal part > 0.2
        }
        else {
          breadsNeeded = Math.floor(breadsNeeded); // Round down otherwise
        }
      }
    }
    setNumberOfBreads(breadsNeeded);
  };

  useEffect(() => {
    calculateBreadsNeeded(numberOfPeople);
  }, [numberOfPeople]); // Recalculate when numberOfPeople changes

  return (
    <div className="container">
      <div className="calculator">
        <h1>Hvor mange glade brødspisere skal ha lunsj?</h1>
        <div>
          <input
            type="range"
            id="numberOfPeople"
            min="1"
            max="60"
            value={numberOfPeople}
            onChange={(e) => {
              setNumberOfPeople(parseInt(e.target.value));
            }}
          />
          <p>{numberOfPeople}</p>
        </div>
        <p>Du bør kjøpe {numberOfBreads} brød.</p>
      </div>
    </div>
  );
}

export default App;
