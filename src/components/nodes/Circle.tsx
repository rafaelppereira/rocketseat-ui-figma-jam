import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

export function Circle({ selected }: NodeProps) {
  return (
    <div className="bg-orange-500 group w-full h-full min-w-[200px] min-h-[200px] rounded-full flex items-center justify-center text-white text-lg hover:ring-4 hover:ring-orange-200 transition-all">
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
    </div>
  );
}
