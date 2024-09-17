import { useEffect, useState } from "react";
import "./style/Timer.css";

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
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const numOfExercises = workout.exercises.length;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!stop) {
                setTimer((prevTimer) => prevTimer + 1);
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [timer, stop]);

    const checkEndOfWorkout = () => {
        if (
            currentSet + 1 === currentExercise.sets &&
            currentExerciseIndex + 1 === numOfExercises
        )
            return true;
        else return false;
    };

    const handleCurrentSet = () => {
        if (currentSet + 1 === currentExercise.sets) {
            setCurrentExercise(workout.exercises[currentExerciseIndex + 1]);
            setCurrentExerciseIndex(currentExerciseIndex + 1);
            setCurrentSet(0);
        } else {
            setCurrentSet(currentSet + 1);
        }
    };

    const isWorkoutOngoing = () => {
        if (!rest) {
            if (checkEndOfWorkout()) return false;
        } else {
            handleCurrentSet();
        }

        return true;
    };

    const handleTimerClick = () => {
        setStop(true);

        if (isWorkoutOngoing()) {
            setRest(!rest);
            setTimer(0);
            setStop(false);
        } else {
            setTimer("Workout finished");
        }
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
