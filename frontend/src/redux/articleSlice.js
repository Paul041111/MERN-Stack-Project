import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API BASE
const API = "http://localhost:5000/api/articles";

/* ======================
   GET ARTICLES
====================== */
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

/* ======================
   CREATE ARTICLE
====================== */
export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async (data) => {
    const res = await axios.post(API, data);
    return res.data;
  }
);

/* ======================
   SLICE
====================== */
const articleSlice = createSlice({
  name: "articles",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // CREATE
      .addCase(createArticle.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default articleSlice.reducer;