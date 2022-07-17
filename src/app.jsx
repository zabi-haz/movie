import TopMovies from "./navigationSystem/home/Home";
import NavigationSystem from "./navigationSystem/NavigationSystem";
import {BrowserRouter as Router , Routes , Route , Navigate} from "react-router-dom"
import "./style/style.css"
import Home from "./navigationSystem/home/Home";
import Explor from "./navigationSystem/explor/Explore";
import Profile from "./navigationSystem/profile/Profile";
import Mylist from "./navigationSystem/myList/MyList";
export default function App() {
    return(
        <Router>
            <div className="main_app">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/:id" element={<Home />} />
                    <Route path="/home/explor" element={<Explor />} />
                    <Route path="/home/profile" element={<Profile />} />
                    <Route path="/home/mylist" element={<Mylist />} />
                </Routes>
            </div>
        </Router>
    )
}