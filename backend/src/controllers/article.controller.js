import Article from "../models/Article.js";

// GET ALL ARTICLES
export const getArticles = async (req, res) => {
  const articles = await Article.find().populate("userId", "name email");
  res.json(articles);
};

// CREATE ARTICLE
export const createArticle = async (req, res) => {
  const { title, content } = req.body;

  const article = await Article.create({
    title,
    content,
    userId: req.user.id
  });

  res.json(article);
};

// UPDATE ARTICLE
export const updateArticle = async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(article);
};

// DELETE ARTICLE
export const deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};