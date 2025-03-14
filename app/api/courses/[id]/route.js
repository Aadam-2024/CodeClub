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

// Define GET method handler for fetching a single course by ID
export async function GET(request, { params }) {
  const { id } = params;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT id, course_name, course_description FROM courses WHERE id = $1",
      [id]
    );
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json({ message: "Error fetching course" }, { status: 500 });
  }
}
