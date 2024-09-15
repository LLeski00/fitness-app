import { useEffect, useState } from "react";

const Timer = ({
    workout,
    setWorkout,
    currentExercise,
    setCurrentExercise,
    currentSet,
    setCurrentSet,
}) => {
    const [timer, setTimer] = useState(0);
    const [stop, setStop] = useState(false);
    const [rest, setRest] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!stop) {
                setTimer((prevTimer) => prevTimer + 1);
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [timer, stop]);

    const handleTimerClick = () => {
        setStop(true);

        setRest(!rest);
        setTimer(0);
        setStop(false);
    };

    return (
        <div onClick={() => handleTimerClick()} className="timer">
            <div className="timer-content">
                {rest && <p>Rest</p>}
                {!rest && <p>Train</p>}
                <p>{timer}</p>
            </div>
        </div>
    );
};

export default Timer;
