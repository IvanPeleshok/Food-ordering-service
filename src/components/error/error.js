import React from 'react';
import img from './error.jpg'

const Error = () => {
    return <div style={{textAlign:"center", height: '100vh', padding: 'auto', scale: '3'}}>
        <img src={img} alt='error'/>
    </div>
}

export default Error;