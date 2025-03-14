"use client";  // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';
import "../main.css";
import "../tailwind.css";

export default function Tutorials() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="bg-gray-200 font-sans leading-normal tracking-normal">
      <nav className="bg-blue-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-white text-xl font-bold">Code Club</a>
          <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/courses" className="text-white">
              Courses
            </Link>
            <Link href="/tutorials" className="text-white">
              Tutorials
            </Link>
            <Link href="/about-us" className="text-white">
              About Us
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${menuOpen ? '' : 'hidden'} md:hidden`}
        >
          <Link href="/" className="block text-white px-4 py-2">
            Home          
          </Link>
          <Link href="/courses" className="block text-white px-4 py-2">
            Courses
          </Link>
          <Link href="/tutorials" className="block text-white px-4 py-2">
            Tutorials
          </Link>
          <Link href="/about-us" className="block text-white px-4 py-2">
            About Us
          </Link>
        </div>
      </nav>

      <h2 class="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">This is tutorials page</h2>
      <div class="container mx-auto py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article
          class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div class="rounded-lg bg-white p-4 !pt-20 sm:p-6">
            <h4 class="block text-xs text-gray-500"> 10th Oct 2024 </h4>
            <a href="#">
              <h3 class="mt-0.5 text-lg font-bold text-gray-900">
                How to center an div element using css?
              </h3>
            </a>
          </div>
        </article>

        <article
        class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div class="rounded-lg bg-white p-4 !pt-20 sm:p-6">
          <h4 class="block text-xs text-gray-500"> 10th Oct 2024 </h4>
          <a href="#">
            <h3 class="mt-0.5 text-lg font-bold text-gray-900">
              How can you integrate CSS on a web page?
            </h3>
          </a>
        </div>
      </article>

      <article
      class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div class="rounded-lg bg-white p-4 !pt-20 sm:p-6">
        <h4 class="block text-xs text-gray-500"> 10th Oct 2024 </h4>
        <a href="#">
          <h3 class="mt-0.5 text-lg font-bold text-gray-900">
              What are the advantages of Embedded Style Sheets?
          </h3>
        </a>
      </div>
      </article>

      <article
      class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div class="rounded-lg bg-white p-4 !pt-20 sm:p-6">
        <h4 class="block text-xs text-gray-500"> 10th Oct 2024 </h4>
        <a href="#">
          <h3 class="mt-0.5 text-lg font-bold text-gray-900">
              What are the advantages of External Style Sheets?
          </h3>
        </a>
      </div>
      </article>
      </div>
    </main>
  );
}
