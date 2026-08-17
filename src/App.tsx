import React from 'react';

export default function App() {
  const newUrl = 'https://alekshub-v2.vercel.app/';

  return (
    <div className="min-h-screen bg-[#111214] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full bg-[#1e2024] border border-[#2e3036] rounded-xl p-8 shadow-2xl flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        <div className="space-y-1">
          <p className="text-xl font-semibold text-gray-100">
            This website got deleted
          </p>
          <p className="text-sm font-medium text-gray-400">
            By Aleks
          </p>
        </div>

        <div className="w-full pt-2 flex flex-col items-center gap-3">
          <p className="text-sm text-gray-300">
            Here is the new one:
          </p>
          <a
            href={newUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors duration-150 shadow-md text-sm sm:text-base break-all"
          >
            <span>alekshub-v2.vercel.app</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href={newUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:underline break-all"
          >
            {newUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
