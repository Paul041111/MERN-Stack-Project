// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./app/auth/pages/Loginpage.jsx";
import RegisterPage from "./app/auth/pages/Registerpage.jsx";
import ArticlesPage from "./app/article/pages/ArticlesPage.jsx";
import CreateArticlePage from "./app/article/pages/CreateArticlePage";
import EditArticlePage from "./app/article/pages/EditArticlePage";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/create" element={<CreateArticlePage />} />
          <Route path="/edit/:id" element={<EditArticlePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
