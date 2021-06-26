import ReactFlow, { removeElements, addEdge, Controls, Background } from 'react-flow-renderer';
import { useState, useCallback } from 'react'
import CustomElement from './CustomElement';
import ButtonEdge from './ButtonEdge';

import ConnectionLine from './ConnectionLine';
const nodeTypes = {
    selectorNode: CustomElement,
};
const edgeTypes = {
    buttonedge: ButtonEdge,
  };
const initialElements = [
    {
      id: '2',
      type: 'selectorNode',
      data: {title: 'Тема 12',
      tasks: 1, 
      lessons: 2,
      hours: 18,
      description: `Уравнения 
      математической 
      физики в частных 
      производных второго порядка`},
      position: { x: 10, y: 15 },
    },
    {
        id: '3',
        type: 'selectorNode',
        data: {title: 'Тема 16',
        tasks: 10, 
        lessons: 10,
        hours: 25,
        description: `Уравнения 
        математической 
        физики в частных 
        производных второго порядка`},
        position: { x: 450 , y: 100 },
    },
    {
        id: '4',
        type: 'selectorNode',
        data: {title: 'Тема 15', 
        tasks: 2, 
        lessons: 3,
        hours: 12,
        description: `Уравнения 
        математической 
        физики в частных 
        производных второго порядка`},
        position: { x: 550 , y: 600 },
    }
    
  ];
  const getNodeId = () => `randomnode_${+new Date()}`;
 
  export default () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements(addEdge(params, elements));
   
    const onAdd = useCallback(() => {
        const newNode = {
          id: getNodeId(),
          type: 'selectorNode',
          data: { title: 'Тема 10',
          tasks: 2, 
        
          lessons: 3,
          hours: 12,
          description: `Уравнения 
          математической 
          физики в частных 
          производных второго порядка` },
          position: {
            x: Math.random() * window.innerWidth - 100,
            y: Math.random() * window.innerHeight,
          },
        };
        setElements((els) => els.concat(newNode));
      }, [setElements]);
  
    return (
        <>
        <button onClick={onAdd}>Add new node</button>
      <div style={{ height: 900, width: '100%', 
    
    backgroundColor: 'white'
    }}>
        <ReactFlow
         edgeTypes={edgeTypes}
         connectionLineComponent={ConnectionLine}
          nodeTypes={nodeTypes}
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
        >
                <Background
      variant="lines"
      gap={12}
      size={1}
    />
        <Controls />
        </ReactFlow>
      </div>
      </>
    );
  };