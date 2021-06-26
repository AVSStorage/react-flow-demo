import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
const isValidConnection = (connection) => { console.log('connection', connection); return true};

export default memo(({data}) => {
 
  return (
    <>
      <Handle
      id="a"
        type="target"
        position="left"
        onConnect={(params) => console.log('handle onConnect', params)}
        isValidConnection={isValidConnection}
        style={{ background: '#555' }}
      
      />
        <Handle
        id="b"
        type="target"
        isValidConnection={isValidConnection}
        position="top"
        onConnect={(params) => console.log('handle onConnect', params)}
        style={{ background: 'green' }}
      
      />
      <article style={{width: 301,
      zIndex: 100,
      backgroundColor: 'white',
      borderRadius: '20px',
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
      id="d"
        type="target"
        position="right"
        onConnect={(params) => console.log('handle onConnect', params)}
        isValidConnection={isValidConnection}
        style={{ right: 0, top: '50%', background: '#555' }}
      />
      <Handle
      id="n"
        type="=target"
        onConnect={(params) => console.log('handle onConnect', params)}
        isValidConnection={isValidConnection}
        position="bottom"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
      />
    </>
  );
});