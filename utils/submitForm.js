const onSubmit = async (data) => {
  try {
    // Create FormData to handle file uploads
    const formData = new FormData();

    // Add all text fields
    Object.keys(data).forEach((key) => {
      if (key !== "photo" && key !== "birthCert" && key !== "transferCert") {
        formData.append(key, data[key] || "");
      }
    });

    // Add files if they exist
    if (photoRef.current?.files[0]) {
      formData.append("photo", photoRef.current.files[0]);
    }
    if (birthCertRef.current?.files[0]) {
      formData.append("birthCert", birthCertRef.current.files[0]);
    }
    if (tcRef.current?.files[0]) {
      formData.append("transferCert", tcRef.current.files[0]);
    }

    // Send to API
    const response = await fetch("/api/applications", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to submit application");
    }

    alert("Application submitted successfully!");
    reset();
    setPhotoPreview(null);
    setBirthCertName("");
    setTcName("");
    photoRef.current.value = "";
    birthCertRef.current.value = "";
    tcRef.current.value = "";
  } catch (error) {
    console.error("Submission error:", error);
    alert(`Error: ${error.message}`);
  }
};

export { onSubmit };
