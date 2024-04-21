import { useState } from "react";

function PostForm({setNewPost}) {
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const handleInput = (e) => {
  setTitle(e.currentTarget.value);
  };
}

export default PostForm;
