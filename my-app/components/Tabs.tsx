"use client";

import React, {useState} from "react";



export default function Tabs() {
  // State to track the active tab (either "works" or "revenue")
  const [activeTab, setActiveTab] = useState<"works" | "revenue">("works");

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex space-x-8 border-b mb-4">
        <button
          onClick={() => setActiveTab("works")}
          className={`pb-2 ${
            activeTab === "works"
              ? "border-b-2 border-black font-semibold text-gray-900"
              : "text-gray-500"
          }`}
        >
          Uploaded Works
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          className={`pb-2 ${
            activeTab === "revenue"
              ? "border-b-2 border-black font-semibold text-gray-900"
              : "text-gray-500"
          }`}
        >
          Revenue
        </button>
      </div>

      {/* Conditional Rendering based on Active Tab */}
      {activeTab === "works" ? <UploadedWorks /> : <RevenueOverview />}
    </div>
  );
}

function UploadedWorks() {
  return (
    <table className="w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr className="border-b">
          <th className="p-4 text-left text-gray-600">Title</th>
          <th className="p-4 text-left text-gray-600">Platform</th>
          <th className="p-4 text-left text-gray-600">Status</th>
          <th className="p-4 text-left text-gray-600">Unclaimed Revenue</th>
        </tr>
      </thead>
      <tbody>
        {[
          { title: 'Summer Vibes', platform: 'Spotify', status: 'Analyzed', revenue: '$150.25' },
          { title: 'Midnight Dreams', platform: 'YouTube', status: 'Pending', revenue: '--' },
          { title: 'Electric Pulse', platform: 'Spotify', status: 'Analyzed', revenue: '$220.15' },
          { title: 'Acoustic Serenity', platform: 'YouTube', status: 'Analyzed', revenue: '$95.50' },
          { title: 'Urban Echoes', platform: 'Spotify', status: 'Pending', revenue: '--' },
        ].map((work) => (
          <tr key={work.title} className="border-b">
            <td className="p-4">{work.title}</td>
            <td className="p-4">{work.platform}</td>
            <td className="p-4">{work.status}</td>
            <td className="p-4">{work.revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RevenueOverview() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Revenue Overview</h3>
      <p className="text-gray-600 mb-4">
        Your revenue breakdown and unclaimed funds.
      </p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Total Unclaimed Revenue</span>
          <span className="font-bold text-gray-900">$465.90</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Spotify Unclaimed</span>
          <span className="font-bold text-gray-900">$370.40</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">YouTube Unclaimed</span>
          <span className="font-bold text-gray-900">$95.50</span>
        </div>
      </div>
    </div>
  );
}



// export default function Tabs() {
//   return (
//     <div>
//       {/* Tab Headers */}
//       <div className="flex space-x-8 border-b mb-4">
//         <button className="pb-2 border-b-2 border-black font-semibold text-gray-900">
//           Uploaded Works
//         </button>
//         <button className="pb-2 text-gray-500">Revenue</button>
//       </div>

//       {/* Tab Content - Uploaded Works Table */}
//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="border-b">
//             <th className="p-4 text-left text-gray-600">Title</th>
//             <th className="p-4 text-left text-gray-600">Platform</th>
//             <th className="p-4 text-left text-gray-600">Status</th>
//             <th className="p-4 text-left text-gray-600">Unclaimed Revenue</th>
//           </tr>
//         </thead>
//         <tbody>
//           {[
//             { title: 'Summer Vibes', platform: 'Spotify', status: 'Analyzed', revenue: '$150.25' },
//             { title: 'Midnight Dreams', platform: 'YouTube', status: 'Pending', revenue: '--' },
//             { title: 'Electric Pulse', platform: 'Spotify', status: 'Analyzed', revenue: '$220.15' },
//             { title: 'Acoustic Serenity', platform: 'YouTube', status: 'Analyzed', revenue: '$95.50' },
//             { title: 'Urban Echoes', platform: 'Spotify', status: 'Pending', revenue: '--' },
//           ].map((work) => (
//             <tr key={work.title} className="border-b">
//               <td className="p-4">{work.title}</td>
//               <td className="p-4">{work.platform}</td>
//               <td className="p-4">{work.status}</td>
//               <td className="p-4">{work.revenue}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
