 
import { notFound } from "next/navigation";
import Link from "next/link";

async function getCourse(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
      cache: "no-store", // Ensure fresh data is fetched
    });

    if (!res.ok) {
      return null; // Return null if the course is not found
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export default async function CourseDetail({ params }) {
  const { id } = params;
  const course = await getCourse(id);

  if (!course) {
    return notFound(); // Show 404 if course is not found
  }

  return (
    <main className="bg-gray-200 font-sans leading-normal tracking-normal">
      {/* ✅ Navbar */}
      <nav className="bg-blue-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            Code Club
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/courses" className="text-white">Courses</Link>
            <Link href="/tutorials" className="text-white">Tutorials</Link>
            <Link href="/about-us" className="text-white">About Us</Link>
          </div>
        </div>
      </nav>

      {/* ✅ Course Details Section */}
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{course.course_name}</h1>
        <p className="mt-4 text-lg text-gray-700">{course.course_description}</p>
      </div>
    </main>
  );
}
