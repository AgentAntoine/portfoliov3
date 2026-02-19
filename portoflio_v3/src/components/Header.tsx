"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="flex items-center justify-center gap-2 py-2 px-4 text-sm">
          <span className="bg-black text-white text-xs font-medium px-2 py-0.5 rounded">
            New
          </span>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors flex items-center gap-1"
          >
            Animations are now available on Mobbin
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
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
              <span className="font-semibold text-lg tracking-tight">
                Mobbin
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Log in
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-black"
              >
                Changelog
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-black"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-black"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-black"
              >
                Merch
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-black"
              >
                Support
              </a>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-black"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="mt-4 block bg-black text-white text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-gray-800 transition-colors"
                >
                  Join for free
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
