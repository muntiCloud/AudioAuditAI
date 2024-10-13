"use client"

import { useState } from "react"
import UserDashboard from "./user-dashboard.tsx"
import UploadFlow from "./upload-flow"




export function AppComponent() {

  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = () => {
    setIsUploading(true);
  };

  const handleUploadComplete = () => {
    setIsUploading(false);
    // Optionally refresh data here if needed
  };

  const handleBackToDashboard = () => {
    setIsUploading(false);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {isUploading ? (
        <UploadFlow onComplete={handleUploadComplete} onBack={handleBackToDashboard} />
      ) : (
        <UserDashboard onUploadClick={handleUploadClick} />
      )}
    </div>
  );
}





// export function AppComponent() {
//   const [isUploading, setIsUploading] = useState(false)

//   const handleUploadClick = () => {
//     setIsUploading(true)
//   }

//   const handleUploadComplete = () => {
//     setIsUploading(false)
//     // Here you might want to refresh the dashboard data
//   }

//   const handleBackToDashboard = () => {
//     setIsUploading(false)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       {isUploading ? (
//         <UploadFlow
//           onComplete={handleUploadComplete}
//           onBack={handleBackToDashboard}
//         />
//       ) : (
//         <UserDashboard onUploadClick={handleUploadClick} />
//       )}
//     </div>
//   )
// }
