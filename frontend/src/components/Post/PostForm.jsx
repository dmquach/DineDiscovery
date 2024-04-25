import { useState } from "react";

function PostForm({setNewPost}) {
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const handleInput = (e) => {
  setTitle(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", title);
    if (photoFile) {
      formData.append("post[photo]", photoFile);
    }
  }

  return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="post-title"
        value={title}
        onChange={handleInput}
        required
      />
    </form>
  );
}

export default PostForm;
