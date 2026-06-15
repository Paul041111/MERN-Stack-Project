import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  createArticle,
} from "../../../redux/articleSlice";

export default function ArticlesPage() {
  const dispatch = useDispatch();

  const { list, loading } = useSelector((state) => state.articles);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(createArticle({ title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Articles</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>

      {loading && <p>Loading...</p>}

      {list.map((a) => (
        <div key={a._id}>
          <h3>{a.title}</h3>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
}