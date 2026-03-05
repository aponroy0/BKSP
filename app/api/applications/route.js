import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), "public/uploads");

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract all fields
    const applicationData = {
      fullName: formData.get("fullName"),
      gender: formData.get("gender"),
      dob: formData.get("dob"),
      appliedClass: formData.get("appliedClass"),
      academicYear: formData.get("academicYear"),
      religion: formData.get("religion"),
      bloodGroup: formData.get("bloodGroup"),
      address: formData.get("address"),
      emergencyContact: formData.get("emergencyContact"),
      prevSchool: formData.get("prevSchool"),
      fatherName: formData.get("fatherName"),
      motherName: formData.get("motherName"),
      guardianMobile: formData.get("guardianMobile"),
      declaration: formData.get("declaration"),
      files: {
        photo: null,
        birthCert: null,
        transferCert: null,
      },
      submittedAt: new Date().toISOString(),
    };

    // Handle file uploads
    const fileFields = ["photo", "birthCert", "transferCert"];

    for (const field of fileFields) {
      const file = formData.get(field);
      if (file && file instanceof File && file.size > 0) {
        try {
          const buffer = await file.arrayBuffer();
          const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${file.name}`;
          const filepath = path.join(uploadsDir, filename);

          fs.writeFileSync(filepath, Buffer.from(buffer));
          applicationData.files[field] = `/uploads/${filename}`;
        } catch (error) {
          console.error(`Error saving ${field}:`, error);
          return NextResponse.json(
            { message: `Failed to save ${field}` },
            { status: 400 },
          );
        }
      }
    }

    // Validate required fields
    if (!applicationData.fullName) {
      return NextResponse.json(
        { message: "Full name is required" },
        { status: 400 },
      );
    }

    if (!applicationData.files.birthCert) {
      return NextResponse.json(
        {
          message:
            "Birth certificate is required. Please upload a PDF or image file.",
        },
        { status: 400 },
      );
    }

    // Here you can save the application data to a database
    // For now, we'll just log it
    console.log("Application received:", applicationData);

    // TODO: Save to database
    // await saveApplicationToDatabase(applicationData);

    return NextResponse.json(
      {
        message: "Application submitted successfully!",
        data: applicationData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { message: "Failed to process application" },
      { status: 500 },
    );
  }
}
