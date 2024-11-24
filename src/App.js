import MidSection from "./components/midSection";
import "./App.css";
import BottomSection from "./components/bottomSection";
import NavBar from "./components/navBar";
import Home1 from "./components/home1";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home1 />
            <h1>Trending Books!</h1>
            <MidSection />
            <BottomSection />
        </div>
    );
}

export default App;
