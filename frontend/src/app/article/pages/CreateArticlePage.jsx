import { useState } from "react";
import { createArticle } from "../../../api/articles";
import { useNavigate } from "react-router-dom";

export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createArticle({ title, content });

    navigate("/articles");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Article</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button>Create</button>
    </form>
  );
}