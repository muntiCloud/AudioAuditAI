"use client";

export default function Header({ onUpload }: { onUpload: () => void }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
        </div>
        <h1 className="text-2xl font-semibold ml-4 text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md"
          onClick={onUpload}
        >
          Upload New Work
        </button>
        <button className="ml-4 text-gray-600">Log out</button>
      </div>
    </header>
  );
}



