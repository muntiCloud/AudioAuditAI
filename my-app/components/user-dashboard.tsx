"use client";

"use client";

import Header from "./header";
import Tabs from "./Tabs"; // Import Tabs



export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <Header onUpload={onUploadClick} />

        {/* AI Assistant Section */}
        <section className="mt-8 max-w-6xl mx-auto px-4">
          {/* AI Assistant Card with Adjusted Width */}
          <div className="bg-white shadow-md">
            < div className="rounded-lg p-12 w-full min-h-[500px]" >
            {/* Header and Subtitle */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">AI Assistant</h2>
              <p className="text-lg text-gray-500">
                Ask me anything about your audio audits and revenue
              </p>
            </div>

            {/* AI Message Section */}
            <div className="bg-gray-100 p-4 rounded-lg text-lg my-6">
              Hello! I'm your AI assistant for AudioAudit. How can I help you today?
            </div>
            </div>

            {/* Input Section */}
            <div className="p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow p-3 border rounded-lg focus:outline-none"
              />
              <button className="ml-2 p-3 bg-black text-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto px-4">
          <DashboardCard title="Total Works" value="5" />
          <DashboardCard title="Unclaimed Revenue" value="$465.90" />
          <DashboardCard title="Analyzed Works" value="3" />
          <DashboardCard title="Pending Analysis" value="2" />
        </div>

        {/* Tabs Section */}
        <div className="mt-8 max-w-6xl mx-auto px-4">
          <Tabs />
        </div>
      </div>
    );
  }

  function DashboardCard({ title, value }: { title: string; value: string }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    );
  }






  

// export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
//     return (
//       <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
//         <Header onUpload={onUploadClick} />

//         {/* AI Assistant Section */}
//         <section className="mt-12 max-w-4xl mx-auto px-4">
//           {/* Chat Card with Header and Subtitle Inside */}
//           {/* <div className="bg-white shadow-md rounded-lg p-6 space-y-12 max-w-5xl"> */}
//           <div className="bg-white shadow-md rounded-lg p-8 space-y-10 max-w-5xl w-full mx-auto min-h-[400px]">

//             {/* Header and Subtitle */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">AI Assistant</h2>
//               <p className="text-gray-600">
//                 Ask me anything about your audio audits and revenue
//               </p>
//             </div>

//             {/* AI Message Section */}
//             <div className="bg-gray-100 p-3 rounded-lg">
//               Hello! I'm your AI assistant for AudioAudit. How can I help you today?
//             </div>

//             {/* Input Section */}
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 // className="flex-grow p-3 border rounded-lg focus:outline-none"
//                  className="mt-4 w-full p-3 border rounded-lg"
//               />
//               <button className="ml-2 p-3 bg-black text-white rounded-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto px-4">
//           <DashboardCard title="Total Works" value="5" />
//           <DashboardCard title="Unclaimed Revenue" value="$465.90" />
//           <DashboardCard title="Analyzed Works" value="3" />
//           <DashboardCard title="Pending Analysis" value="2" />
//         </div>

//         {/* Tabs Section */}
//         <div className="mt-8 max-w-6xl mx-auto px-4">
//           <Tabs />
//         </div>
//       </div>
//     );
//   }

//   function DashboardCard({ title, value }: { title: string; value: string }) {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-3xl font-bold text-gray-900">{value}</p>
//       </div>
//     );
//   }














// import Header from "./header";
// import Tabs from "./Tabs"; // Import Tabs here

// export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
//   return (
//     <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
//       <Header onUpload={onUploadClick} />

//       <section className="mt-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">AI Assistant</h2>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <p className="text-gray-600">
//             Hello! I'm your AI assistant for AudioAudit. How can I help you today?
//           </p>
//           <div className="flex mt-4">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               className="flex-grow p-3 border rounded-lg"
//             />
//             <button className="ml-2 p-3 bg-black text-white rounded-lg">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       <div className="grid grid-cols-2 gap-6 mt-8">
//         <DashboardCard title="Total Works" value="5" />
//         <DashboardCard title="Unclaimed Revenue" value="$465.90" />
//         <DashboardCard title="Analyzed Works" value="3" />
//         <DashboardCard title="Pending Analysis" value="2" />
//       </div>

//       <Tabs className="mt-8" /> {/* Use the Tabs component here */}
//     </div>
//   );
// }

// function DashboardCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
//       <p className="text-3xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }



// export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
//   return (
//     <div className="p-8">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold">Dashboard</h1>
//         <button
//           className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
//           onClick={onUploadClick}
//         >
//           Upload New Work
//         </button>
//         <button className="ml-4 text-gray-500">Log out</button>
//       </header>

//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-4">AI Assistant</h2>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <p>Hello! I'm your AI assistant for AudioAudit. How can I help you today?</p>
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="mt-4 w-full p-3 border rounded-lg"
//           />
//         </div>
//       </section>

//       <div className="grid grid-cols-2 gap-6 mb-8">
//         <DashboardCard title="Total Works" value="5" />
//         <DashboardCard title="Unclaimed Revenue" value="$465.90" />
//         <DashboardCard title="Analyzed Works" value="3" />
//         <DashboardCard title="Pending Analysis" value="2" />
//       </div>

//       <Tabs />
//     </div>
//   );
// }

// function DashboardCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p className="text-3xl font-semibold">{value}</p>
//     </div>
//   );
// }

// function Tabs() {
//   return (
//     <div>
//       <div className="flex space-x-4 mb-4">
//         <button className="text-lg font-bold">Uploaded Works</button>
//         <button className="text-lg text-gray-400">Revenue</button>
//       </div>

//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="border-b">
//             <th className="p-4 text-left">Title</th>
//             <th className="p-4 text-left">Platform</th>
//             <th className="p-4 text-left">Status</th>
//             <th className="p-4 text-left">Unclaimed Revenue</th>
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
















// "use client";

// export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">User Dashboard</h1>
//       <button
//         onClick={onUploadClick}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Start Upload
//       </button>
//     </div>
//   );
// }
