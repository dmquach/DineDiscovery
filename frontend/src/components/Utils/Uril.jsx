export const handleSinglePhotoSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("post[title]", title);
  if (photoFile) {
    formData.append("post[photo]", photoFile);
  }

};
