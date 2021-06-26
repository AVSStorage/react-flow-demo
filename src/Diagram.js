import ReactFlow, { removeElements, addEdge, Controls, Background } from 'react-flow-renderer';
import { useState, useCallback } from 'react'
import CustomElement from './CustomElement';
import ButtonEdge from './ButtonEdge';

import ConnectionLine from './ConnectionLine';
const nodeTypes = {
    selectorNode: CustomElement,
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
        arrowHeadType: 'arrowclosed',
        data: {title: 'Тема 16',
        tasks: 10, 
        lessons: 10,
        hours: 25,
        description: `Уравнения 
        математической 
        физики в частных 
        производных второго порядка`},
        position: { x: 600 , y: 100 },
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
    },
    {
        id: 'reactflow__edge-3d-4a',
        source: 2,
        target: 4,
        arrowHeadType: 'arrow',  
    
    style: { stroke: 'red', strokeWidth: '5px', filter: 'drop-shadow( 3px 3px 7px rgba(255, 0, 0, .5))' }

    }
    
  ];
  const getNodeId = () => `randomnode_${+new Date()}`;
 
  const Diagram =  () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = useCallback((elementsToRemove) => {
      
      setElements((els) => removeElements(elementsToRemove, els));
    },[]);
    const onConnect = (params) => {
        console.log(elements);
        setElements(addEdge({...params, arrowHeadType: 'arrowclosed',  
        type: 'buttonedge',
    style: { stroke: 'red', strokeWidth: '5px', filter: 'drop-shadow( 3px 3px 7px rgba(255, 0, 0, .5))' }}, elements))};
    
     
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
         edgeTypes={{
            buttonedge: (props) => <ButtonEdge {...props} data={{onChange: (id) => {
                setElements((els) => {
                   
                    const elementsToRemove = els.filter(item => item.id === id)
                    return removeElements(elementsToRemove, els)});
            }}} />
        }}
         connectionLineComponent={ConnectionLine}
          nodeTypes={nodeTypes}
          elements={elements}
          snapToGrid={true}
          
          arrowHeadColor={'red'}
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

  export default Diagram;