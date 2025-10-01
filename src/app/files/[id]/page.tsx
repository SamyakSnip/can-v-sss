import Link from "next/link";

interface FilesParams {
  params: {
    id: string;
  };
}

export default function Files({ params }: FilesParams) {
  const { id } = params;
  const workspaceName = `Workspace ${id}`;

  const files = [
    {
      id: 1,
      name: "Design Mockups v2.pdf",
      type: "pdf",
      size: "2.3 MB",
      uploadedBy: "Alice Johnson",
      date: "2025-01-30",
      preview: "Document preview placeholder",
    },
    {
      id: 2,
      name: "Project Roadmap.pptx",
      type: "pptx",
      size: "1.8 MB",
      uploadedBy: "Bob Smith",
      date: "2025-01-29",
      preview: "Presentation preview placeholder",
    },
    {
      id: 3,
      name: "Team Meeting Notes.docx",
      type: "docx",
      size: "450 KB",
      uploadedBy: "Carol Davis",
      date: "2025-01-28",
      preview: "Word document preview placeholder",
    },
    {
      id: 4,
      name: "Budget Spreadsheet.xlsx",
      type: "xlsx",
      size: "1.2 MB",
      uploadedBy: "You",
      date: "2025-01-27",
      preview: "Spreadsheet preview placeholder",
    },
    {
      id: 5,
      name: "Logo Design.png",
      type: "image",
      size: "320 KB",
      uploadedBy: "Alice Johnson",
      date: "2025-01-26",
      preview: "Image preview placeholder",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{workspaceName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Files</p>
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

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Files & Documents</h3>
          <p className="text-gray-600 dark:text-gray-300">Upload and manage workspace files. Supports drag & drop.</p>
        </div>

        {/* Upload Area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 transition-colors">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upload Files</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Drag and drop or click to browse</p>
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={(e) => console.log("Files selected:", e.target.files)}
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Choose Files
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Supports: PDF, DOCX, PPTX, XLSX, Images (up to 50MB)</p>
          </div>
        </div>

        {/* Files List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">File Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Uploaded By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center mr-4">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{file.type}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{file.type.toUpperCase()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{file.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{file.uploadedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{file.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">Preview</button>
                    <button className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 mr-3">Download</button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preview Placeholder */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">File Preview</h4>
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-lg">Select a file to preview</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Embedded previews for documents, images, and spreadsheets</p>
        </div>
      </div>
    </div>
  );
}