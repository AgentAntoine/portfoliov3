"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

const categories = [
  { label: "Finance", href: "#" },
  { label: "Food & Drink", href: "#" },
  { label: "Travel", href: "#" },
  { label: "Shopping", href: "#" },
  { label: "Social", href: "#" },
];

const screens = [
  { label: "Login", href: "#" },
  { label: "Home", href: "#" },
  { label: "Search", href: "#" },
  { label: "Checkout", href: "#" },
  { label: "Filter & Sort", href: "#" },
];

const uiElements = [
  { label: "Card", href: "#" },
  { label: "Button", href: "#" },
  { label: "Toast", href: "#" },
  { label: "Banner", href: "#" },
  { label: "Tab bar", href: "#" },
];

const appPreviews = [
  {
    id: 1,
    tag: "New",
    gradient: "from-gray-900 to-gray-800",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="w-8 h-8 bg-white/10 rounded-full" />
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-white/10 rounded" />
            <div className="w-6 h-6 bg-white/10 rounded" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-2xl" />
            <div className="h-3 w-24 bg-white/30 rounded mx-auto mb-2" />
            <div className="h-2 w-16 bg-white/20 rounded mx-auto" />
          </div>
        </div>
        <div className="space-y-2 mt-auto">
          <div className="h-10 bg-white/10 rounded-lg" />
          <div className="h-10 bg-emerald-500 rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    tag: "Updated",
    gradient: "from-slate-50 to-white",
    dark: false,
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-gray-100 rounded" />
            <div className="w-5 h-5 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="h-8 bg-gray-100 rounded-lg mb-3 flex items-center px-3">
          <div className="w-4 h-4 bg-gray-300 rounded mr-2" />
          <div className="h-2 w-20 bg-gray-200 rounded" />
        </div>
        <div className="text-xs text-gray-400 mb-2">Suggested for you</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="aspect-video bg-gray-100 rounded-lg" />
          <div className="aspect-video bg-gray-100 rounded-lg" />
        </div>
        <div className="h-6 bg-gray-100 rounded flex items-center px-2 mb-2">
          <div className="w-4 h-4 bg-gray-200 rounded mr-2" />
          <div className="h-2 w-12 bg-gray-200 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-auto">
          <div className="aspect-square bg-gray-100 rounded-lg" />
          <div className="aspect-square bg-gray-100 rounded-lg" />
          <div className="aspect-square bg-gray-100 rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    tag: null,
    gradient: "from-orange-500 to-red-500",
    content: (
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="w-6 h-6 bg-white/20 rounded" />
          <div className="w-6 h-6 bg-white/20 rounded-full" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full mb-4" />
          <div className="h-4 w-28 bg-white/40 rounded mb-2" />
          <div className="h-3 w-20 bg-white/20 rounded" />
        </div>
        <div className="flex justify-center gap-4 mt-auto">
          <div className="w-12 h-12 bg-white/20 rounded-full" />
          <div className="w-12 h-12 bg-white rounded-full" />
          <div className="w-12 h-12 bg-white/20 rounded-full" />
        </div>
      </div>
    ),
  },
];

export function PreviewSection() {
  const [activeTab, setActiveTab] = useState<"Apps" | "Sites">("Apps");
  const [activeFilter, setActiveFilter] = useState<"iOS" | "Web">("iOS");

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Product Preview Card */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
          {/* Header with tabs */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="6" fill="black" />
                <path
                  d="M7 9.5C7 8.67157 7.67157 8 8.5 8H10.5C11.3284 8 12 8.67157 12 9.5V18.5C12 19.3284 11.3284 20 10.5 20H8.5C7.67157 20 7 19.3284 7 18.5V9.5Z"
                  fill="white"
                />
                <path
                  d="M16 9.5C16 8.67157 16.6716 8 17.5 8H19.5C20.3284 8 21 8.67157 21 9.5V18.5C21 19.3284 20.3284 20 19.5 20H17.5C16.6716 20 16 19.3284 16 18.5V9.5Z"
                  fill="white"
                />
              </svg>
              <div className="flex gap-1 ml-4">
                {(["Apps", "Sites"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
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

            {/* Search Bar */}
            <div className="hidden sm:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 w-64">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search on iOS..."
                className="bg-transparent text-sm outline-none flex-1"
              />
              <Sparkles className="w-4 h-4 text-gray-300" />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-4 mb-8">
            <div>
              <p className="text-xs text-gray-400 mb-2">Categories</p>
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={cat.href}
                  className="block text-sm text-gray-700 hover:text-black py-0.5 transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Screens</p>
              {screens.map((screen) => (
                <a
                  key={screen.label}
                  href={screen.href}
                  className="block text-sm text-gray-700 hover:text-black py-0.5 transition-colors"
                >
                  {screen.label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">UI Elements</p>
              {uiElements.map((el) => (
                <a
                  key={el.label}
                  href={el.href}
                  className="block text-sm text-gray-700 hover:text-black py-0.5 transition-colors"
                >
                  {el.label}
                </a>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
              {(["iOS", "Web"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    activeFilter === filter
                      ? "bg-gray-100 text-black"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex gap-2 ml-2">
              {["Latest", "Most popular", "Top rated"].map((label) => (
                <span
                  key={label}
                  className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* App Previews */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {appPreviews.map((app) => (
              <div
                key={app.id}
                className={`relative bg-gradient-to-br ${app.gradient} rounded-2xl overflow-hidden aspect-[9/16] max-h-[300px]`}
              >
                {app.tag && (
                  <span
                    className={`absolute top-3 left-3 z-10 text-xs px-2 py-0.5 rounded ${
                      app.tag === "New"
                        ? "bg-black text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {app.tag}
                  </span>
                )}
                {app.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
