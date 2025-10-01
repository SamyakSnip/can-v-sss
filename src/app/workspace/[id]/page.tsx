import Link from "next/link";

interface WorkspaceParams {
  params: {
    id: string;
  };
}

export default function Workspace({ params }: WorkspaceParams) {
  const { id } = params;
  const workspaceName = `Workspace ${id}`; // Placeholder

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{workspaceName}</h2>
        </div>
        <nav className="mt-6 px-3 space-y-2">
          <Link
            href={`/workspace/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Overview</span>
          </Link>
          <Link
            href={`/whiteboard/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Whiteboard</span>
          </Link>
          <Link
            href={`/tasks/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Task Board</span>
          </Link>
          <Link
            href={`/chat/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Chat</span>
          </Link>
          <Link
            href={`/files/${id}`}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="ml-3">Files</span>
          </Link>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
            <Link
              href={`/video/${id}`}
              className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Video Call</span>
            </Link>
            <Link
              href={`/members/${id}`}
              className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Members</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Whiteboard Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Whiteboard</h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Whiteboard goes here</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Interactive canvas for brainstorming and drawing.</p>
          </div>

          {/* Task Board Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Task Board</h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Kanban board goes here</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Manage tasks with Trello-style columns.</p>
          </div>

          {/* Chat Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chat</h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Chat interface goes here</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Real-time messaging for team communication.</p>
          </div>

          {/* Video Call Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Video Call</h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Video call placeholder</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Integrated video conferencing.</p>
          </div>

          {/* Members Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Members Panel</h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Members list goes here</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">View and manage workspace members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}