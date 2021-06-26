import {
    getSmoothStepPath,
    getEdgeCenter,
    getMarkerEnd,
  } from 'react-flow-renderer';


  const foreignObjectSize = 40;

// const onEdgeClick = (evt, id) => {
//   evt.stopPropagation();
//   alert(`remove ${id}`);
// };

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) {
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    borderRadius: 10,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  console.log(edgeCenterX, edgeCenterY)
  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={sourceX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <button
            className="edgebutton"
            onClick={(event) => { data.onChange(id) } }
          >
            ×
          </button>
        </body>
      </foreignObject>
    </>
  );
}