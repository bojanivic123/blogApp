import './App.css';
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/posts" element={<Posts />}></Route>
        <Route path="/post/:id" element={<SinglePost />}></Route> 
        <Route path="/add" element={<AddPost />}></Route>
        <Route path="/edit/:id" element={<AddPost />}></Route> 
      </Routes>
    </div>
  );
}

export default App;

