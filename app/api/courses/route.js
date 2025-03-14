import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    password: 'tQQ1V73QYrNWk7Rl',
    host: 'proudly-merry-pitta.data-1.use1.tembo.io',
    port: '5432',
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
});

// Define GET method handler
export async function GET() {
  try {
    const client = await pool.connect();
    const result = await pool.query("SELECT id, course_name, course_description FROM courses");
    client.release();
    console.log("Courses fetched successfully", result.rows);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({ message: "Error fetching courses" }, { status: 500 });
  }
}
