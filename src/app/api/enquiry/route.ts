import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Path to store lead entries locally
const DB_FILE = path.join(process.cwd(), "enquiries.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, project, message, consent } = body;

    // Simple backend validations
    if (!name || !phone || !email || !project) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, phone, email, project)." },
        { status: 400 }
      );
    }

    if (consent === false) {
      return NextResponse.json(
        { success: false, error: "Consent to terms and communication is required." },
        { status: 400 }
      );
    }

    const newEnquiry = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      project,
      message: message || "",
    };

    // Read existing database or create new one
    let enquiries = [];
    try {
      const fileData = await fs.readFile(DB_FILE, "utf-8");
      enquiries = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist yet, we will start a new array
    }

    enquiries.push(newEnquiry);
    await fs.writeFile(DB_FILE, JSON.stringify(enquiries, null, 2), "utf-8");

    console.log(`[Backend API] New lead captured for project: ${project} - Name: ${name}`);

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully.", leadId: newEnquiry.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Backend API Error]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
