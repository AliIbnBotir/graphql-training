import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./views/Posts";
import PostPage from "./views/Post";
import UserPage from "./views/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:postId" element={<PostPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
