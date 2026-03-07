const upload_image = async (file, title = "") => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("title", title);

  const res = await fetch(`${process.env.BASE_URL}/api/v1/image/upload-image`, {
    method: "POST",
    body: formData,
  });
  console.log(formData);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Upload failed");
  }

  return data.data.image_url;
};

export { upload_image };
