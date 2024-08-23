import { GoHomeFill } from "react-icons/go";
import { RiSettingsFill } from "react-icons/ri";
import { GiMuscleUp } from "react-icons/gi";
import "./style/BottomBar.css";
import { useEffect } from "react";

const BottomBar = ({ route, setRoute }) => {
    const homeIcon = "home-icon";
    const trainIcon = "train-icon";
    const settingsIcon = "settings-icon";

    useEffect(() => {
        routeSwitch();
    }, []);

    const routeSwitch = () => {
        let icon;

        switch (route) {
            case "Home":
                icon = document.getElementById(homeIcon);
                icon.style.opacity = "70%";
                break;
            case "Train":
                icon = document.getElementById(trainIcon);
                icon.style.opacity = "70%";
                break;
            case "Settings":
                icon = document.getElementById(settingsIcon);
                icon.style.opacity = "70%";
                break;
            default:
                alert("The route doesn't exist! Route: ", route);
                break;
        }
    };

    return (
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div id={homeIcon} className="bottom-bar-icon">
                    <GoHomeFill />
                </div>
                <div id={trainIcon} className="bottom-bar-icon">
                    <GiMuscleUp />
                </div>
                <div id={settingsIcon} className="bottom-bar-icon">
                    <RiSettingsFill />
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
