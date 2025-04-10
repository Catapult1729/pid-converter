import React from 'react';

function HintDialog({content, display}) {
  const parts =content.description.split(/(?=\[)|(?<=\))|(?=\n)|(?<=\n)|(?=\<)|(?<=\>)/);
  return (
    <div className='HintDialog' style={{ opacity: display? '1': '0', pointerEvents: display? 'auto':'none'}}>
      <div>
        <h2>{content.title}</h2>
        <div>{(()=>{
          const elems = [[]];
          for(let i=0;i<parts.length;i++){
            if(parts[i]=='\n'){
              elems.push([]);
            }else if((/\[.*\]\(.*\)/).test(parts[i])){
              elems[elems.length-1].push(<a href={parts[i].match(/\((.*)\)/)[1]} key={'a'+i}>{parts[i].match(/\[(.*)\]/)[1]}</a>);
            }else if((/\<.*\>/).test(parts[i])){
              elems[elems.length-1].push(<b key={'b'+i}>{parts[i].match(/\<(.*)\>/)[1]}</b>);
            }else{
              elems[elems.length-1].push(parts[i]);
            }
          }
          return(
            <>
            {(()=>{
              const spans =[];
              for(let i=0;i<elems.length;i++){
                if(i) spans.push(<br key={'br'+i}/>);
                spans.push(<span key={'span'+i}>{elems[i]}</span>);
              }
              return(<>{spans}</>);
            })()}
            </>
          );
          })()}
        </div>
      </div>
    </div>
  );
}

export default HintDialog;