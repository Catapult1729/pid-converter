import React from 'react';

function HintButton({onClick}) {
  return (
    <div  className='HintButton' onClick={onClick}>
      <img src={`${process.env.PUBLIC_URL}/HintIcon.svg`}/>
    </div>
  );
}

export default HintButton;