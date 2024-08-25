import "./style/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { useState } from "react";
import Train from "./Train";
import Settings from "./Settings";

function App() {
    const [route, setRoute] = useState("home-component");

    return (
        <div className="App">
            <div className="app-content">
                <Navbar />

                {route === "home-component" && <Home />}
                {route === "train-component" && <Train />}
                {route === "settings-component" && <Settings />}

                <BottomBar route={route} setRoute={setRoute} />
            </div>
        </div>
    );
}

export default App;
