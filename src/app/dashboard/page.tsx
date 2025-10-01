import Link from "next/link";

export default function Dashboard() {
  const workspaces = [
    { id: 1, name: "Project Alpha", description: "Collaborative project for team brainstorming", members: 5 },
    { id: 2, name: "Marketing Campaign", description: "Planning the next marketing strategy", members: 8 },
    { id: 3, name: "Product Roadmap", description: "Developing the future features", members: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Workspaces</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Select a workspace to get started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <Link
              key={workspace.id}
              href={`/workspace/${workspace.id}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{workspace.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  {workspace.members} members
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{workspace.description}</p>
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition-colors">
                  Open
                </button>
              </div>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-6 right-6 z-10">
          <Link
            href="/workspace/new"
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
}