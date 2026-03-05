export function extractImageId(url) {
  if (!url) return null;

  try {
    const parts = url.split("/");
    return parts[parts.length - 1];
  } catch (error) {
    return null;
  }
}
