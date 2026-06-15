import { useState } from "react";
import { createArticle } from "../../../api/articles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateArticle } from "../../../api/articles";

export default function EditArticlePage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateArticle(id, { title, content });

    navigate("/articles");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Article</h2>

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

      <button type="submit">Update</button>
    </form>
  );
}
