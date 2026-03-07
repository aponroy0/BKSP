import { upload_image } from "@/utils/getProfilePhotoUrl";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const gender = formData.get("gender");
    const dob = formData.get("dob");
    const appliedClass = formData.get("appliedClass");
    const address = formData.get("address");
    const emergencyContact = formData.get("emergencyContact");
    const fatherName = formData.get("fatherName");
    const motherName = formData.get("motherName");
    const guardianMobile = formData.get("guardianMobile");

    const photoFile = formData.get("photo");
    const birthCertFile = formData.get("birthCert");
    const transferCertFile = formData.get("transferCert");

    // Upload files first
    let photoUrl = "";
    let birthCertificateUrl = "";
    let tcCertificateUrl = "";

    if (photoFile) {
      photoUrl = await upload_image(photoFile);
    }
    if (birthCertFile) {
      birthCertificateUrl = await upload_image(birthCertFile);
    }
    if (transferCertFile) {
      tcCertificateUrl = await upload_image(transferCertFile);
    }
    console.log("Photo Url : ", photoUrl);
    // convert dob yyyy-mm-dd → dd/mm/yyyy
    const [y, m, d] = dob.split("-");
    const formattedDob = `${d}/${m}/${y}`;

    const payload = {
      form_data: {
        full_name: fullName,
        dob: formattedDob,
        gender,
        applied_class: appliedClass,
        academic_year: "2026-2027",
        permanent_address: address || "",
        phone: emergencyContact || "",
        fathers_name: fatherName,
        mothers_name: motherName,
        primary_parent_phone: guardianMobile,
        birth_certificate: birthCertificateUrl,
        profile_image: photoUrl,
        transfer_certificate: tcCertificateUrl,
      },
    };

    const res = await fetch(
      `${process.env.BASE_URL}/api/v1/in-general/admission-form-entry`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    if (data.error === false) {
      return NextResponse.json(
        { message: "Application submitted successfully" },
        { status: 201 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Submission failed" },
      { status: 500 },
    );
  }
}
