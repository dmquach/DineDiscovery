export const handleSinglePhotoSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("post[title]", title);
  if (photoFile) {
    formData.append("post[photo]", photoFile);
  }
  const response = await fetch("/api/posts", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const post = await response.json();
    setPhotoFile(null);
  }
};
