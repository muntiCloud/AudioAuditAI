"use client";

import { IoMdArrowBack } from "react-icons/io";

type UploadFlowProps = {
  onComplete: () => void;
  onBack: () => void;
};

export default function UploadFlow({ onComplete, onBack }: UploadFlowProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="relative w-[400px] bg-white rounded-lg shadow-lg p-8">

        <button onClick={onBack} className="absolute top-4 left-4 text-gray-600">
          <IoMdArrowBack size={24} />
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">Upload New Work</h1>

        <div className="space-y-6">
          {/* Upload Sound Recording */}
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-md text-center">
            <label className="cursor-pointer">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V3m-6 9h2M19 14v7m0 0l-4-4m4 4l4-4"
                  />
                </svg>
                <p className="text-blue-500">Upload Master Sound Recording</p>
                <p className="text-sm text-gray-500">Drag and drop or click to select a file</p>
              </div>
            </label>
          </div>

          {/* Upload PDF or CSV */}
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-md text-center">
            <label className="cursor-pointer">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14v7m0 0l-4-4m4 4l4-4m0-10V3a2 2 0 00-2-2H7a2 2 0 00-2 2v3"
                  />
                </svg>
                <p className="text-blue-500">Upload PDF or CSV Document</p>
                <p className="text-sm text-gray-500">Drag and drop or click to select a file</p>
              </div>
            </label>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
