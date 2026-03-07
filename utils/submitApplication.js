"use server";
export async function submitApplication({
  data,
  photoRef,
  birthCertRef,
  tcRef,
  setPhotoErr,
  setPhotoPreview,
  setBirthCertName,
  setTcName,
  reset,
}) {
  // Photo check
  if (!photoRef.current?.files[0]) {
    setPhotoErr("Student photo is required");
    return;
  }
  setPhotoErr("");

  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key !== "photo" && key !== "birthCert" && key !== "transferCert") {
        formData.append(key, data[key] || "");
      }
    });

    if (photoRef.current?.files[0])
      formData.append("photo", photoRef.current.files[0]);
    if (birthCertRef.current?.files[0])
      formData.append("birthCert", birthCertRef.current.files[0]);
    if (tcRef.current?.files[0])
      formData.append("transferCert", tcRef.current.files[0]);

    const response = await fetch("/api/applications", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit application");
    }

    // Reset everything on success
    alert("Application submitted successfully!");
    reset();
    setPhotoPreview(null);
    setBirthCertName("");
    setTcName("");
    setPhotoErr("");
    photoRef.current.value = "";
    birthCertRef.current.value = "";
    tcRef.current.value = "";
  } catch (error) {
    console.error("Submission error:", error);
    alert(`Error: ${error.message}`);
  }
}
