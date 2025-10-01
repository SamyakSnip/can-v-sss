'use client';

import { useState } from 'react';

interface FileUploadProps {
  onFilesSelected?: (files: FileList | null) => void;
}

export default function FileUpload({ onFilesSelected }: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFilesSelected) {
      onFilesSelected(e.target.files);
    } else {
      console.log("Files selected:", e.target.files);
    }
  };

  return (
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
          onChange={handleChange}
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
  );
}