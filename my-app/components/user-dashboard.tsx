"use client";

import Header from "./header";
import Tabs from "./Tabs";



export default function UserDashboard({ onUploadClick }: { onUploadClick: () => void }) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <Header onUpload={onUploadClick} />

        <section className="mt-8 max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-md">
            < div className="rounded-lg p-12 w-full min-h-[500px]" >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">AI Assistant</h2>
              <p className="text-lg text-gray-500">
                Ask me anything about your audio audits and revenue
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-lg my-6">
              Hello! I&apos;m your AI assistant for AudioAudit. How can I help you today?
            </div>
            </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto px-4">
          <DashboardCard title="Total Works" value="5" />
          <DashboardCard title="Unclaimed Revenue" value="$465.90" />
          <DashboardCard title="Analyzed Works" value="3" />
          <DashboardCard title="Pending Analysis" value="2" />
        </div>

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
