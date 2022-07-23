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
import SearchData from "./navigationSystem/search/SearchData";
import SingleMovieDetails from "./component/SingleMovieDetails";
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
          <Route path="/explor/search" element={<SearchData data={"data"} />} />
          <Route path="/explor/:id" element={<SingleMovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
