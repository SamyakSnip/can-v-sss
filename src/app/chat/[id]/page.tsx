import Link from "next/link";

interface ChatParams {
  params: {
    id: string;
  };
}

export default function Chat({ params }: ChatParams) {
  const { id } = params;
  const workspaceName = `Workspace ${id}`;

  const messages = [
    {
      id: 1,
      user: "Alice Johnson",
      avatar: "A",
      time: "10:30 AM",
      text: "Hey team! Just finished the design mockups for the new feature. Check them out in the files section.",
      isOwn: false,
    },
    {
      id: 2,
      user: "You",
      avatar: "Y",
      time: "10:32 AM",
      text: "Looks great Alice! The color scheme matches our brand perfectly. I'll review the details and get back to you.",
      isOwn: true,
    },
    {
      id: 3,
      user: "Bob Smith",
      avatar: "B",
      time: "10:35 AM",
      text: "@You, do we need to adjust the spacing on mobile? It seems a bit tight in the prototype.",
      isOwn: false,
    },
    {
      id: 4,
      user: "You",
      avatar: "Y",
      time: "10:37 AM",
      text: "Good catch Bob. I'll tweak the responsive breakpoints and push an update shortly.",
      isOwn: true,
    },
    {
      id: 5,
      user: "Carol Davis",
      avatar: "C",
      time: "10:40 AM",
      text: "Everyone, meeting in 20 minutes to discuss the timeline. Join the video call link in the workspace.",
      isOwn: false,
    },
    {
      id: 6,
      user: "Alice Johnson",
      avatar: "A",
      time: "10:42 AM",
      text: "See you all there! 👍",
      isOwn: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{workspaceName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Chat</p>
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

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Chat</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">12 online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isOwn
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {!message.isOwn && (
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      {message.avatar}
                    </div>
                  )}
                  <div className="flex-1">
                    {!message.isOwn && (
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {message.user}
                      </div>
                    )}
                    <div className="text-sm">{message.text}</div>
                    <div className={`text-xs mt-1 ${
                      message.isOwn
                        ? 'text-blue-100'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.time}
                    </div>
                  </div>
                  {message.isOwn && (
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-medium text-white">
                      {message.avatar}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              Send
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
            <button className="hover:text-gray-700 dark:hover:text-gray-300">📎 Attach</button>
            <button className="hover:text-gray-700 dark:hover:text-gray-300">😊 Emoji</button>
          </div>
        </div>
      </div>
    </div>
  );
}