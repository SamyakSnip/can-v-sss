import Link from "next/link";

interface TasksParams {
  params: {
    id: string;
  };
}

export default function Tasks({ params }: TasksParams) {
  const { id } = params;
  const workspaceName = `Workspace ${id}`;

  const columns = [
    {
      id: "todo",
      title: "To Do",
      color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100",
      tasks: [
        { id: 1, title: "Research new features", description: "Gather requirements from stakeholders", priority: "High" },
        { id: 2, title: "Design database schema", description: "Plan the data structure", priority: "Medium" },
        { id: 3, title: "Set up development environment", description: "Install dependencies and configure tools", priority: "Low" },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100",
      tasks: [
        { id: 4, title: "Implement user authentication", description: "Add login and registration flows", priority: "High" },
        { id: 5, title: "Create dashboard layout", description: "Design the main user interface", priority: "Medium" },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
      tasks: [
        { id: 6, title: "Set up Next.js project", description: "Initialize the application structure", priority: "High" },
        { id: 7, title: "Configure Tailwind CSS", description: "Add styling framework", priority: "Medium" },
        { id: 8, title: "Install Recharts library", description: "Add charting capabilities", priority: "Low" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{workspaceName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Tasks</p>
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

      {/* Kanban Board */}
      <div className="flex-1 p-8 overflow-x-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Task Board</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Drag and drop tasks between columns to update status</p>
        </div>
        <div className="flex space-x-6">
          {columns.map((column) => (
            <div key={column.id} className="flex-1 min-w-[300px]">
              <div className={`p-4 rounded-lg mb-4 ${column.color} font-medium`}>
                {column.title} ({column.tasks.length})
              </div>
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{task.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{task.description}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Drop tasks here or add new</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}