import React from 'react';
import '../styles/spinner.css';

const Spinner = (props) =>(
    <div className="center">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
) 

export default Spinner;