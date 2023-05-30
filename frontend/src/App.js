import React from 'react';
import './App.css'; // Import your custom CSS file

const App = () => {
  return (
    <div className="app">
      <div className="column">
        <h2 className="header">Backend Application 1</h2>
        <h3>Student_List</h3>
        <iframe src="http://api-1-ip" title="Backend Application 1" className="iframe" />
      </div>

      <div className="column">
        <h2 className="header">Backend Application 2</h2>
        <iframe src="http://api-2-ip" title="Backend Application 2" className="iframe" />
      </div>
    </div>
  );
};

export default App;

