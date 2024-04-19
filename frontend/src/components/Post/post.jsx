function Post() {
  const [newPost, setNewPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      setPosts(await res.json());
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (newPost) setPosts((prevPosts) => [newPost, ...prevPosts]);
  }, [newPost]);
}
