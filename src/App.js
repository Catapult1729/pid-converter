import React from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';
import Hint from './Hint';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Hint hasButton={true} content={{title:'Pid探しとは?' ,description:
        'Pid探しとは、[Scratch](https://scratch.mit.edu/)の非共有プロジェクトに隠されたプロジェクトID(Pid)を探し、そのPidをURLに入れて次のプロジェクトに進むゲームです。\n'+
        'おもに[hhayyatto](https://scratch.mit.edu/users/hhayyatto/)さんや[sakura_neko](https://scratch.mit.edu/users/sakura_neko/)さんによって作成されていました。\n'+
        'Scratch APIの仕様変更に伴いTurboWarpで非共有プロジェクトが閲覧できなくなったため、Pid探しの多くが今は遊べません。\n'+
        'そこで、現在もAPIの制限が緩いサムネイル画像に.sb3ファイルを埋め込むことでPid探しを作成・プレイできるようにしたのがこのサイトです。'
        }}/>
    </div>
  );
}

export default App;
