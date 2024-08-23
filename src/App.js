import "./style/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { useState } from "react";

function App() {
    const [route, setRoute] = useState("Home");

    return (
        <div className="App">
            <div className="app-content">
                <Navbar />

                {route === "Home" && <Home />}

                <BottomBar route={route} setRoute={setRoute} />
            </div>
        </div>
    );
}

export default App;
