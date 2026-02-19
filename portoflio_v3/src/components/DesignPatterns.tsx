"use client";

import { useState } from "react";

const tabs = ["Screens", "UI Elements", "Flows", "Text in Screenshot"];

const screenTypes = [
  { label: "Profile", active: false },
  { label: "Wallet", active: false },
  { label: "Welcome", active: false },
  { label: "Account Setup", active: true },
  { label: "Home", active: false },
];

const mockups = [
  {
    id: 1,
    label: "Profile",
    bg: "bg-gray-900",
    content: (
      <div className="p-3 text-white h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
          <div>
            <div className="h-2 w-16 bg-white/80 rounded mb-1" />
            <div className="h-1.5 w-12 bg-white/40 rounded" />
          </div>
        </div>
        <div className="flex gap-4 text-center mb-4">
          <div><div className="text-sm font-bold">2.8K</div><div className="text-[8px] text-white/60">Following</div></div>
          <div><div className="text-sm font-bold">12.4K</div><div className="text-[8px] text-white/60">Followers</div></div>
        </div>
        <div className="h-6 bg-white rounded-full mb-3 flex items-center justify-center text-[10px] text-gray-900 font-medium">Follow All</div>
        <div className="grid grid-cols-2 gap-1 flex-1">
          <div className="bg-white/20 rounded" />
          <div className="bg-white/20 rounded" />
          <div className="bg-white/20 rounded" />
          <div className="bg-white/20 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Wallet",
    bg: "bg-white",
    content: (
      <div className="p-3 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="h-3 w-16 bg-gray-200 rounded" />
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-emerald-100 rounded" />
            <div className="w-4 h-4 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="text-center py-3">
          <div className="text-[10px] text-gray-400">Total Balance</div>
          <div className="text-xl font-bold text-gray-900">$15.00</div>
        </div>
        <div className="flex gap-2 mb-3">
          <div className="flex-1 h-6 bg-gray-900 rounded flex items-center justify-center text-[8px] text-white">Send</div>
          <div className="flex-1 h-6 bg-gray-100 rounded flex items-center justify-center text-[8px]">Request</div>
        </div>
        <div className="text-[8px] text-gray-400 mb-1">Transactions</div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded">
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="h-1.5 w-12 bg-gray-200 rounded" />
            </div>
            <div className="text-[8px] font-medium">+$50</div>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded">
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="h-1.5 w-10 bg-gray-200 rounded" />
            </div>
            <div className="text-[8px] font-medium text-red-500">-$24</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Welcome",
    bg: "bg-gradient-to-br from-emerald-400 to-teal-500",
    content: (
      <div className="p-4 h-full flex flex-col items-center justify-center text-white text-center">
        <div className="w-12 h-12 bg-white/20 rounded-2xl mb-4 flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="text-sm font-semibold mb-1">Welcome to Shop</div>
        <div className="text-[10px] text-white/80 mb-6">Discover products you'll love</div>
        <div className="w-full h-8 bg-white rounded-full text-emerald-600 text-[10px] font-medium flex items-center justify-center">Get Started</div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Account Setup",
    bg: "bg-gray-900",
    content: (
      <div className="p-3 h-full flex flex-col text-white">
        <div className="text-[10px] text-white/60 mb-2">First up, which products do you use the most?</div>
        <div className="space-y-1.5 flex-1">
          {["Mens", "Boys", "Girls", "Womens"].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 p-2 rounded-lg ${i === 0 ? 'bg-white/20' : 'bg-white/10'}`}>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
              <span className="text-[10px]">{item}</span>
              {i === 0 && <div className="ml-auto w-3 h-3 bg-blue-500 rounded-full" />}
            </div>
          ))}
        </div>
        <div className="text-[9px] text-white/40 text-center mb-2">Any others?</div>
        <div className="h-7 bg-white rounded-full text-gray-900 text-[10px] font-medium flex items-center justify-center">Next</div>
      </div>
    ),
  },
  {
    id: 5,
    label: "Home",
    bg: "bg-gradient-to-br from-purple-900 to-indigo-900",
    content: (
      <div className="p-3 h-full flex flex-col text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-semibold">tv+</div>
          <div className="w-5 h-5 bg-white/20 rounded-full" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="text-[8px] text-white/60 mb-1">Featured</div>
          <div className="flex-1 bg-white/10 rounded-lg mb-2 flex items-end p-2">
            <div>
              <div className="h-2 w-16 bg-white/60 rounded mb-1" />
              <div className="h-1.5 w-12 bg-white/40 rounded" />
            </div>
          </div>
          <div className="text-[8px] text-white/60 mb-1">Watch Popular</div>
          <div className="flex gap-1.5">
            <div className="flex-1 aspect-video bg-white/10 rounded" />
            <div className="flex-1 aspect-video bg-white/10 rounded" />
          </div>
        </div>
      </div>
    ),
  },
];

export function DesignPatterns() {
  const [activeTab, setActiveTab] = useState("Screens");

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-6">
            Find design patterns
            <br />
            in seconds.
          </h2>

          {/* Tabs */}
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Type Labels */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-8 flex-wrap">
          {screenTypes.map((screen) => (
            <span
              key={screen.label}
              className={`text-sm ${
                screen.active ? "text-black font-medium" : "text-gray-400"
              }`}
            >
              {screen.label}
            </span>
          ))}
        </div>

        {/* Phone Mockups Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className={`flex-shrink-0 w-[140px] sm:w-[160px] ${mockup.bg} rounded-3xl shadow-lg overflow-hidden border border-gray-200/50`}
            >
              {/* Status bar */}
              <div className={`h-5 flex items-center justify-between px-3 ${mockup.bg === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>
                <span className="text-[8px]">9:41</span>
                <div className="flex gap-0.5">
                  <div className="w-3 h-1.5 bg-current opacity-60 rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-current opacity-60 rounded-full" />
                </div>
              </div>
              {/* Content */}
              <div className="aspect-[9/16]">
                {mockup.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
