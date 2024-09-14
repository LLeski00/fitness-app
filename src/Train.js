import { useState } from "react";
import SessionSelect from "./SessionSelect";
import "./style/Train.css";
import Workout from "./Workout";

const Train = () => {
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [sessionSelected, setSessionSelected] = useState(null);

    return (
        <div className="train">
            <div className="train-content">
                {!isSessionSelected && (
                    <SessionSelect
                        setIsSessionSelected={setIsSessionSelected}
                        setSessionSelected={setSessionSelected}
                    />
                )}
                {isSessionSelected && <Workout session={sessionSelected} />}
            </div>
        </div>
    );
};

export default Train;
