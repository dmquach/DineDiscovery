import { useState } from "react";

function PostForm({setNewPost}) {
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);


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
  for (let i = 0; i < imageFiles.length; i++) {
    formData.append("post[images][]", imageFiles[i]);
  }

  const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const post = await response.json();
        setTitle("");
        setPhotoFile(null);
        setNewPost(post);
      }
      setTitle("");
    };

  return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="post-title"
        value={title}
        onChange={handleInput}
        required
      />

      <button>Make a new Post!</button>
    </form>
  );
}

export default PostForm;
