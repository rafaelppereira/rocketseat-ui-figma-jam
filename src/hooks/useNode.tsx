import { useCallback, useEffect, useState } from "react";
import { addEdge, Connection, useEdgesState, useNodesState } from "reactflow";
import DefaultEdge from "../components/edges/DefaultEdge";
import { Circle } from "../components/nodes/Circle";
import { Square } from "../components/nodes/Square";

const NODE_TYPES = {
  square: Square,
  circle: Circle,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [] satisfies Node[];

export function useNode() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [nodeName, setNodeName] = useState("");

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addSquareNode(type: string) {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: type,
        position: {
          x: 750,
          y: 350,
        },
        data: {
          label: "",
        },
      },
    ]);

    localStorage.setItem("@UiMap:nodes", JSON.stringify(nodes));
    localStorage.setItem("@UiMap:edges", JSON.stringify(edges));
  }

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        node.data = {
          ...node.data,
          label: nodeName,
        };

        return node;
      })
    );
  }, [nodeName, setNodes]);

  return {
    NODE_TYPES,
    EDGE_TYPES,
    nodes,
    edges,
    onEdgesChange,
    onConnect,
    onNodesChange,
    addSquareNode,
    setNodeName,
    nodeName,
  };
}
