import TopMovies from "./navigationSystem/home/Home";
import NavigationSystem from "./navigationSystem/NavigationSystem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./style/style.css";
import Home from "./navigationSystem/home/Home";
import Explor from "./navigationSystem/explor/Explore";
import Profile from "./navigationSystem/profile/Profile";
import Mylist from "./navigationSystem/myList/MyList";
import "./style/style.css";
export default function App() {
  return (
    <Router>
      <div className="main_app">
        <NavigationSystem />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explor" element={<Explor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </div>
    </Router>
  );
}
