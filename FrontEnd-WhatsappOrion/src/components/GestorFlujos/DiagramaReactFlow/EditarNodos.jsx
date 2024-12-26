import { useState, useEffect } from 'react';
import ReactFlow from '@xyflow/react';

import '@xyflow/react/dist/style.css';

export default function EditarNodos() {
    const [elements, setElements] = useState([]);
    const [flowInstance, setFlowInstance] = useState(null);

    useEffect(() => {
        const flowInstance = new ReactFlow({
            // configuración de React Flow
        });
        setFlowInstance(flowInstance);
    }, []);

    const onNodeClick = (event, node) => {
        // eliminar el nodo
        flowInstance.removeNodes([node.id]);
    };

    const addNode = () => {
        // agregar un nuevo nodo
        const newNode = {
            id: 'nuevo-nodo',
            type: 'default',
            position: [100, 100],
        };
        setElements((prevElements) => [...prevElements, newNode]);
    };

    return (
        <div>
            <ReactFlow
                elements={elements}
                onNodeClick={onNodeClick}
            // otros props de React Flow
            />
            <button onClick={addNode}>Agregar nodo</button>
        </div>
    );
}
