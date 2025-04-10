import React from 'react';
import './Tab.css';

function Tab({active, title, onClick}) {
  return (
    <div className={`Tab ${active?'Active':'Passive'}`} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
}

export default Tab;