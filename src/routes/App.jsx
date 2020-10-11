import React from 'react';
import '../styles/globalStyles.css';
import SearchIP from '../components/SearchIP';

const App = () =>{
  return(
    <div id='container'>
      <div id='container-title'>
        <h1 id='title'>IP Address Tracker</h1>
      </div>
      <div id='container-content'>
        <SearchIP/>
      </div>
    </div> 
  )
};

export default App;