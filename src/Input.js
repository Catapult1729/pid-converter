import React from 'react';
import './Input.css';

function Input({placeholder}) {
  return (
    <input className='Input' type='number' min={0} max={100000000000} placeholder={placeholder}></input>
  );
}

export default Input;