import React from 'react';

function HintBack({display, onClick}) {
  return (
    <div className='HintBack' style={{ opacity: display? '0.65': '0', pointerEvents: display? 'auto':'none'}} onClick={onClick}></div>
  );
}

export default HintBack;