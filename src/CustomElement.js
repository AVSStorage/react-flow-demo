import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({data, selected}) => {
 
  return (
    <>
      <Handle
      id="a"
        type="taget"
        position="left"
        style={{ background: '#555' }}
      
      />
        <Handle
        id="b"
        type="target"
        position="top"
        style={{ background: 'green' }}
      
      />
      <article style={{width: 301,
      zIndex: 100,
      backgroundColor: 'white',
      borderRadius: '20px',
      border: selected ? '1px solid': 'none',
height: 301, boxShadow: '0px 10px 15px 5px rgba(197, 197, 197, 0.25)', color: 'black'}}>
        <header style={{display: 'flex', justifyContent: 'space-around'}}>
            <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <span style={{fontSize: '14px', color: '#959595'}}>Занятий</span>
                <strong>{data.lessons}</strong>
            </p>
            <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <span style={{fontSize: '14px', color: '#959595'}}>Задач</span>
                <strong>{data.tasks}</strong>
            </p>
            <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <span style={{fontSize: '14px', color: '#959595'}}>Часов</span>
                <strong>{data.hours}</strong>
            </p>
        </header>
        <h4 style={{fontSize: '24px', marginBottom: 0, marginTop: '0px', textAlign: 'start', paddingLeft: '25px'}}>{data.title}</h4>
        <p style={{fontSize: '20px', lineHeight: '24px', textAlign: 'start', paddingLeft: '25px', fontWeight: 400}}>
          {data.description}
        </p>
      </article>
    
      <Handle
      id="c"
        type="target"
        position="right"
  
        style={{ right: 0, top: '50%', background: '#555' }}
      />
      <Handle
      id="d"
        type="source"
      
        position="bottom"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
      />
    </>
  );
});