import TopMovies from "./navigationSystem/home/Home";
import NavigationSystem from "./navigationSystem/NavigationSystem";
import {BrowserRouter as Router , Routes , Route , Navigate} from "react-router-dom"
import "./style/style.css"
import Home from "./navigationSystem/home/Home";
export default function App() {
    return(
        <Router>
            <div className="main_app">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/:id" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}