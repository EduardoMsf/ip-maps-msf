import React from 'react';

const InfoIP = props =>{
  return(
    <div className="InfoIP-container">
      <div className='InfoIP-items'>
        <div className='InfoIP-headers'>
          <center>
            <table>
              <thead>
              <tr>
                <th>IP</th>
                <th>City</th>
                <th>Timezone</th>
                <th>Postalcode</th>
                <th>ISP</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{props.ip}</td>
                <td>{props.city}</td>
                <td>UTC{props.timezone}</td>
                <td>{props.postalcode}</td>
                <td>{props.isp}</td>
              </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  )
};

export default InfoIP;