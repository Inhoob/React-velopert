import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/inhoob">inhoob프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong프로필</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/profile/:username" element={<Profile></Profile>} />
      </Routes>
    </div>
  );
}

export default App;
