import Link from "next/link";

interface WhiteboardParams {
  params: {
    id: string;
  };
}

export default function Whiteboard({ params }: WhiteboardParams) {
  const { id } = params;
  const workspaceName = `Workspace ${id}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{workspaceName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Whiteboard</p>
        </div>
        <nav className="mt-6 px-3 space-y-2">
          <Link
            href={`/workspace/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">← Back to Workspace</span>
          </Link>
        </nav>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl h-[80vh] bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Whiteboard</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Full canvas for drawing, notes, and collaboration</p>
            <div className="w-96 h-64 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center border border-gray-400 dark:border-gray-500">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Canvas placeholder - Drag, draw, and collaborate here</span>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Tools: Pencil, Shapes, Text, Eraser, Colors</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Supports real-time collaboration and infinite canvas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}