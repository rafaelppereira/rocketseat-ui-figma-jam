import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
  MiniMap,
  useStoreApi,
} from "reactflow";

import * as Toolbar from "@radix-ui/react-toolbar";
import { zinc } from "tailwindcss/colors";

import "reactflow/dist/style.css";
import { Square } from "./components/nodes/Square";
import { useCallback, useEffect, useState } from "react";
import DefaultEdge from "./components/edges/DefaultEdge";
import { Circle } from "./components/nodes/Circle";
import { useNode } from "./hooks/useNode";

function App() {
  const {
    NODE_TYPES,
    EDGE_TYPES,
    nodes,
    edges,
    onEdgesChange,
    onConnect,
    onNodesChange,
    addSquareNode,
  } = useNode();

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: "default",
        }}
        fitView
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300  h-20 px-10 overflow-hidden flex justify-center gap-5">
        <Toolbar.Button
          onClick={() => addSquareNode("square")}
          className="w-32 h-32 bg-violet-500 mt-6 rounded hover:-translate-y-2 transition-transform"
        />

        <Toolbar.Button
          onClick={() => addSquareNode("circle")}
          className="w-32 h-32 bg-orange-500 mt-6 rounded-full hover:-translate-y-2 transition-transform"
        />
      </Toolbar.Root>
    </div>
  );
}

export default App;
