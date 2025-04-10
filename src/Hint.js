import React from 'react';
import { useState } from 'react';
import './Hint.css';

import HintBack from './HintBack';
import HintButton from './HintButton';
import HintDialog from './HintDialog';

function Hint({hasButton, content}) {
  const [display, setDisplay] = useState(false);

  const switchDisplay = ()=>{
    if(display) setDisplay(false);
    else setDisplay(true);
  }
  
  return (
    <div className='Hint'>
      <HintBack display={display} onClick={switchDisplay}/>
      {hasButton? <HintButton onClick={switchDisplay}/>: null}
       <HintDialog content={content} display={display}/>
    </div>
  );
}

export default Hint;