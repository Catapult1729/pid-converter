import React from 'react';
import './Input.css';

function Input({placeholder}) {
  return (
    <input className='Input' type='number' min={0} placeholder={placeholder}></input>
  );
}

export default Input;