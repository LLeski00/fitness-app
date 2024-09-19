import "./style/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { useState } from "react";
import Train from "./Train";
import History from "./History";
import NewSession from "./NewSession";

function App() {
    const [route, setRoute] = useState("home-component");

    return (
        <div className="App">
            <div className="app-content">
                <Navbar />

                {route === "home-component" && <Home />}
                {route === "new-session-component" && <NewSession />}
                {route === "train-component" && <Train />}
                {route === "history-component" && <History />}

                <BottomBar route={route} setRoute={setRoute} />
            </div>
        </div>
    );
}

export default App;
