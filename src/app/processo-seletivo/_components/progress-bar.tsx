// /app/processo-seletivo/_components/ProgressBar.tsx

import { CheckCircle, XCircle, Circle } from "lucide-react";

export default function ProgressBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center">
        <CheckCircle className="text-green-500" size={32} />
        <p className="text-center mt-2 text-xs">Lorem Ipsum</p>
      </div>
      <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
      <div className="flex flex-col items-center">
        <XCircle className="text-red-500" size={32} />
        <p className="text-center mt-2 text-xs">Lorem Ipsum</p>
      </div>
      <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
      <div className="flex flex-col items-center">
        <Circle className="text-gray-400" size={32} />
        <p className="text-center mt-2 text-xs">Lorem Ipsum</p>
      </div>
    </div>
  );
}
