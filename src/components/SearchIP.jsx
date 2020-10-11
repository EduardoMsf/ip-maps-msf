//Form and axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IP from './IP';

const SearchIP = () =>{

  const [ip, setIp] = useState();
  const [inputIP, setInputIP] = useState();
  const [aux, setAux] = useState(false);
  
  
  const handleSubmit = e =>{
    e.preventDefault();
    
    setIp(inputIP);
    setAux(true);
    
  }
  
  const handleChange = e =>{
    e.preventDefault();
   
    setInputIP(e.target.value);
    setAux(false);
  }

  return(
    <div id='container-search'>
      <div id='container-search-form'>
        <form onSubmit={handleSubmit}>
          <input 
            id='container-text-box' 
            placeholder='Search IPv4 address' 
            type='text' name='ip-address'
            onChange={handleChange}
          />
          <button id='container-button' >Search</button>
        </form>
      </div>
      <div id='container-search-content'>
      { ip && aux ? <IP ip={ip}/> : ''}
      </div>
    </div>
  )
};

export default SearchIP;