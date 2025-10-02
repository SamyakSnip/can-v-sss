import { BsBell, BsCheckCircle, BsExclamationTriangle, BsInfoCircle } from "react-icons/bs";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "info",
      title: "New workspace member joined",
      description: "Alice Johnson has joined the 'Project Alpha' workspace.",
      time: "2 minutes ago",
      icon: BsInfoCircle,
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Task completed",
      description: "Your task 'Implement user authentication' has been marked as done by Bob Smith.",
      time: "15 minutes ago",
      icon: BsCheckCircle,
      read: true,
    },
    {
      id: 3,
      type: "warning",
      title: "File upload failed",
      description: "The file 'Budget Spreadsheet.xlsx' exceeded the size limit. Please try a smaller file.",
      time: "1 hour ago",
      icon: BsExclamationTriangle,
      read: false,
    },
    {
      id: 4,
      type: "info",
      title: "Video call started",
      description: "Carol Davis started a video call in 'Marketing Campaign' workspace. Join now?",
      time: "2 hours ago",
      icon: BsInfoCircle,
      read: true,
    },
    {
      id: 5,
      type: "success",
      title: "Subscription renewed",
      description: "Your Pro plan has been successfully renewed for the next month.",
      time: "1 day ago",
      icon: BsCheckCircle,
      read: true,
    },
    {
      id: 6,
      type: "warning",
      title: "Low storage space",
      description: "Your workspace is running low on storage. Consider upgrading your plan.",
      time: "3 days ago",
      icon: BsExclamationTriangle,
      read: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Stay updated with workspace activities and alerts.</p>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Email notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Push notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Mark all as read</span>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                Mark All Read
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-6 h-6 mt-1 ${notification.type === 'success' ? 'text-green-500' : notification.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</h4>
                        <span className={`text-xs ${notification.read ? 'text-gray-400 dark:text-gray-500' : 'text-blue-600 dark:text-blue-400 font-medium'}`}>
                          {notification.time}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{notification.description}</p>
                      {!notification.read && (
                        <div className="mt-2">
                          <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                            Mark as read
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <BsBell className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notifications</h3>
            <p className="text-gray-500 dark:text-gray-400">You&apos;ll see updates from your workspaces here.</p>
          </div>
        )}
      </div>
    </div>
  );
}