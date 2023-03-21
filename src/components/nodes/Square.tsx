import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import "@reactflow/node-resizer/dist/style.css";
import { useNode } from "../../hooks/useNode";

export function Square({ id, selected, data }: NodeProps) {
  const { setNodeName, nodeName } = useNode();

  return (
    <div className="bg-violet-500 group rounded w-full h-full min-w-[200px] min-h-[200px] flex items-center justify-center text-white text-lg hover:ring-4 hover:ring-purple-200 transition-all">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <div className="opacity-0 group-hover:opacity-100">
        <Handle
          id="right"
          type="source"
          position={Position.Right}
          className="-right-5 w-3 h-3   bg-blue-400/80"
        />
      </div>

      <div className="opacity-0 group-hover:opacity-100">
        <Handle
          id="left"
          type="source"
          position={Position.Left}
          className="-left-5 w-3 h-3   bg-blue-400/80"
        />
      </div>

      <div className="opacity-0 group-hover:opacity-100">
        <Handle
          id="top"
          type="source"
          position={Position.Top}
          className="-top-5 w-3 h-3   bg-blue-400/80"
        />
      </div>

      <div className="opacity-0 group-hover:opacity-100">
        <Handle
          id="bottom"
          type="source"
          position={Position.Bottom}
          className="-bottom-5 w-3 h-3   bg-blue-400/80"
        />
      </div>

      <input
        type="text"
        className="text-white  bg-transparent text-center resize-none w-full h-full block   outline-none px-4 "
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
      />
    </div>
  );
}
