import { useRef, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2'
import {
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    useReactFlow,
    Background,
    reconnectEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import Sidebar from './Sidebar';
import { DnDProvider, useDnD } from './DnDContext';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Inicio' },
        position: { x: 250, y: 5 },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

// eslint-disable-next-line react-refresh/only-export-components
const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const edgeReconnectSuccessful = useRef(true);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();
    const [type] = useDnD();

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const onReconnectStart = useCallback(() => {
        edgeReconnectSuccessful.current = false;
    }, []);

    const onReconnect = useCallback((oldEdge, newConnection) => {
        edgeReconnectSuccessful.current = true;
        setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    }, []);

    const onReconnectEnd = useCallback((_, edge) => {
        if (!edgeReconnectSuccessful.current) {
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }

        edgeReconnectSuccessful.current = true;
    }, []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            // check if the dropped element is valid
            if (!type) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type}` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [screenToFlowPosition, type],
    );

    const saveFlow = useCallback(() => {
        const flowData = {
            nodes,
            edges,
        };
        localStorage.setItem('reactflow-diagram', JSON.stringify(flowData));
        Swal.fire({
            title: '',
            text: "Datos guardados con exito",
            icon: 'success',
            confirmButtonText: 'Aceptar',
        })
    }, [nodes, edges]);

    const loadFlow = useCallback(() => {
        const savedFlow = localStorage.getItem('reactflow-diagram');
        if (savedFlow) {
            const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedFlow);
            setNodes(savedNodes || []);
            setEdges(savedEdges || []);

            Swal.fire({
                title: '',
                text: "Datos cargados con exito",
                icon: 'success',
                confirmButtonText: 'Aceptar',
            })

        } else {
            alert('No hay ningún diagrama guardado.');
        }
    }, [setNodes, setEdges]);

    useEffect(() => {
        loadFlow();
    }, [loadFlow]);

    return (
        
        <div className="dndflow">
            <div className="save-load-buttons">
                <button onClick={saveFlow}>Guardar</button>
                <button onClick={loadFlow}>Cargar</button>
            </div>
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    snapToGrid
                    onReconnect={onReconnect}
                    onReconnectStart={onReconnectStart}
                    onReconnectEnd={onReconnectEnd}
                    fitView
                    style={{ backgroundColor: "#F7F9FB" }}
                >
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>


            <Sidebar />


        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => (
    <ReactFlowProvider>
        <DnDProvider>
            <DnDFlow />
        </DnDProvider>
    </ReactFlowProvider>
);