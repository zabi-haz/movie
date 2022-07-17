import TopMovies from "./navigationSystem/home/Home";
import NavigationSystem from "./navigationSystem/NavigationSystem";
import "./style/style.css"
export default function App() {
    return(
        <div className="mian">
            <NavigationSystem />
            <TopMovies />
            <h1>hi there</h1>
        </div>
    )
}