import './App.css';
import React, { useState, useCallback } from 'react'
import Main from './components/Main';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar(v => !v));

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <button onClick={toggleSidebar}>
            {showSidebar ? "Hide" : "Show"}
          </button>
        </header>
      </div>
      <div className="main">
        {!showSidebar ? null : <Sidebar />}
        <div className="content">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
