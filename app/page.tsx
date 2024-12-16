import React from 'react';
import { ReactFlow, Background } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '何月？' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '研究費名は？' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <>
      <header style={{ backgroundColor: "#7777ff", padding: "20px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ margin: 0, fontSize: "2em", color: "#fff" }}>Doc Flow Checker++</h1>
      </header>
      <main>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#d3d3d3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '80vw', height: '100vh', backgroundColor: '#ffffff' }}>
            <ReactFlow nodes={initialNodes} edges={initialEdges} defaultViewport={{ x: 100, y: 100, zoom: 1 }}>
              <Background />
            </ReactFlow>
          </div>
        </div>
      </main>
    </>

  );
}