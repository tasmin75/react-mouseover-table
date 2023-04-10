import React, { useState } from "react";
import "./App.css";

function App() {
  const [logs, setLogs] = useState([]);

  function handleMouseOver() {
    const time = new Date().toLocaleString();
    const event = { time, eventName: "Mouseover out H1" };
    setLogs((prevLogs) => [...prevLogs, event]);
  }

  function handleMouseOut() {
    const time = new Date().toLocaleString();
    const event = { time, eventName: "Mouseout in H1" };
    setLogs((prevLogs) => [...prevLogs, event]);
  }

  return (
    <div>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Header 1
      </h1>
      <h2>Header 2</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.time}</td>
                <td>{log.eventName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
