import React from 'react';
import { useState } from 'react';
import './Main.css';

import Hint from './Hint';
import Tab from './Tab';
import Input from './Input';

function Main() {
  const [mode, setMode] = useState(0);
  const swichMode = ()=>{
    if(mode) setMode(0);
    else setMode(1);
  }
  return (
    <div className='Main'>
      <div>
        <Tab active={mode?false:true} title={'Pid→.sb3'} onClick={swichMode}></Tab>
        <Tab active={mode?true:false} title={'.sb3→Pid'} onClick={swichMode}></Tab>
      </div>
      <div>
        <div className='P2s' style={{display:mode?'none':'flex'}}>
          <Input placeholder={"enter Pid"}></Input>
          <Hint hasButton={true} content={{title:'Pid→.sb3' ,description:
          'Pidから.sb3ファイルに変換します。\nPidを入力して、ダウンロードボタンを押してください。'
          }}/>
        </div>
        <div className='s2P' style={{display:mode?'flex':'none'}}>

          <Hint hasButton={true} content={{title:'.sb3→Pid' ,description:
          '.sb3ファイルとあなたが持っているプロジェクトのPidからサムネイルに.sb3を埋め込むjavascriptコードを生成します。\n'
          }}/>
        </div>
      </div>
    </div>
  );
}

export default Main;