"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import "./main.css";
import "./tailwind.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // ✅ Stop loading after fetching
      }
    };

    fetchCourses();
  }, []);

  // ✅ Use useCallback to optimize function
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <main className="bg-gray-200 font-sans leading-normal tracking-normal min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            Code Club
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/courses" className="text-white hover:underline">Courses</Link>
            <Link href="/tutorials" className="text-white hover:underline">Tutorials</Link>
            <Link href="/about-us" className="text-white hover:underline">About Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none" 
            aria-label="Toggle Menu"
            role="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-14 left-0 w-full bg-blue-700 transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <Link href="/" className="block text-white px-4 py-2 hover:bg-blue-600">Home</Link>
          <Link href="/courses" className="block text-white px-4 py-2 hover:bg-blue-600">Courses</Link>
          <Link href="/tutorials" className="block text-white px-4 py-2 hover:bg-blue-600">Tutorials</Link>
          <Link href="/about-us" className="block text-white px-4 py-2 hover:bg-blue-600">About Us</Link>
        </div>
      </nav>

      {/* Main Content */}
      <h2 className="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Home Page
      </h2>

      {/* Courses Section */}
      <div className="container mx-auto py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* ✅ Show Loading Text */}
        {loading ? (
          <p className="text-center text-gray-700 col-span-3">Courses are loading, please wait...</p>
        ) : (
          courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="block">
              <section className="bg-white p-6 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition">
                <h2 className="text-xl font-bold mb-2">{course.course_name}</h2>
                <p>{course.course_description}</p>
              </section>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
