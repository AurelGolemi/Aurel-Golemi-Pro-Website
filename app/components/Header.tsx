"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-center border-b underline-offset-1 bg-gray-950">
      <div className="container mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold truncate">
          Aurel Golemi
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:justify-between">
          <ul className="flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            <li>
              <Link
                href="#about"
                className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-black px-3 sm:px-4 lg:px-6 py-2 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all whitespace-nowrap"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#expertise"
                className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-black px-3 sm:px-4 lg:px-6 py-2 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all whitespace-nowrap"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-black px-3 sm:px-4 lg:px-6 py-2 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all whitespace-nowrap"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-black px-3 sm:px-4 lg:px-4 py-2 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all whitespace-nowrap"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          <Link
            href="#"
            className="bg-black hover:bg-white shadow-m text-gray-100 hover:text-gray-900 border px-3 sm:px-4 py-2 sm:py-2.5 hover:shadow-white shadow-2xl text-sm sm:text-base flex items-center justify-center rounded-md rounded-e-md border-gray-100 hover:border-gray-900 transition-all cursor-pointer whitespace-nowrap"
          >
            Hire Me
          </Link>
          <Link
            href="https://github.com/AurelGolemi"
            className="bg-white text-black border px-3 sm:px-4 py-2 sm:py-2.5 hover:shadow-white shadow-2xl text-sm sm:text-base hover:bg-gray-200 hover:px-6 hover:py-3 flex items-center justify-center rounded-md rounded-e-md border-gray-900 transition-all cursor-pointer whitespace-nowrap"
          >
            GitHub
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col space-y-1.5 cursor-pointer p-2 hover:bg-gray-900 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bottom-0 bg-black border-b border-gray-700 z-40 overflow-y-auto">
          <nav className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base text-gray-300 hover:text-black px-4 py-2.5 sm:py-3 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all"
            >
              About
            </Link>
            <Link
              href="#expertise"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base text-gray-300 hover:text-black px-4 py-2.5 sm:py-3 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all"
            >
              Expertise
            </Link>
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base text-gray-300 hover:text-black px-4 py-2.5 sm:py-3 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all"
            >
              Services
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm sm:text-base text-gray-300 hover:text-black px-4 py-2.5 sm:py-3 bg-transparent hover:bg-gray-100 rounded-full hover:shadow-white shadow-2xl transition-all"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-4 sm:pt-6 border-t border-gray-700">
              <Link
                href="#"
                className="bg-black hover:bg-white text-gray-100 hover:text-gray-900 border px-4 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center rounded-md border-gray-100 hover:border-gray-900 hover:shadow-white shadow-xl transition-all cursor-pointer"
              >
                Hire Me
              </Link>
              <Link
                href="https://github.com/AurelGolemi"
                className="bg-gray-100 text-black border px-4 py-2.5 sm:py-3 hover:py-3.5 text-sm sm:text-base flex items-center justify-center rounded-md border-gray-900 hover:shadow-white shadow-xl hover:bg-gray-200 transition-all cursor-pointer"
              >
                GitHub
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
