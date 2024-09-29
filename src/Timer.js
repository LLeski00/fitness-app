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
    const [workoutFinished, setWorkoutFinished] = useState(false);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!stop) {
                setTimer((prevTimer) => prevTimer + 1);
            }
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [timer, stop]);

    useEffect(() => {
        let temp = document.getElementById("feedback");
        temp.style.opacity = "0%";

        if (!feedback) return;

        temp.style.transition = "opacity linear 2s";
        if (feedback === "Great set!") temp.style.color = "green";
        else temp.style.color = "red";
        temp.style.opacity = "100%";
        setTimeout(() => {
            temp.style.opacity = "0%";
        }, 2000);
        setTimeout(() => {
            setFeedback(null);
        }, 4000);
    }, [feedback]);

    const checkEndOfWorkout = () => {
        if (
            currentSet + 1 === currentExercise.sets.length &&
            currentExerciseIndex + 1 === numOfExercises
        )
            return true;
        else return false;
    };

    const saveSetTime = () => {
        let temp = workout;
        temp.exercises[currentExerciseIndex].sets[currentSet].time = timer;
        if (timer < 53) {
            temp.exercises[currentExerciseIndex].sets[currentSet].feedback =
                "Weight too high!";
        } else if (timer > 67) {
            temp.exercises[currentExerciseIndex].sets[currentSet].feedback =
                "Weight too low!";
        } else {
            temp.exercises[currentExerciseIndex].sets[currentSet].feedback =
                "Great set!";
        }

        setFeedback(
            temp.exercises[currentExerciseIndex].sets[currentSet].feedback
        );
        setWorkout(temp);
    };

    const handleCurrentSet = () => {
        if (currentSet + 1 === currentExercise.sets.length) {
            setCurrentExercise(workout.exercises[currentExerciseIndex + 1]);
            setCurrentExerciseIndex(currentExerciseIndex + 1);
            setCurrentSet(0);
        } else {
            setCurrentSet(currentSet + 1);
        }
    };

    const isWorkoutOngoing = () => {
        if (!rest) {
            saveSetTime();
            if (checkEndOfWorkout()) return false;
        } else {
            handleCurrentSet();
        }

        return true;
    };

    const saveWorkout = () => {
        let temp = { session: workout };

        fetch("http://localhost:3001/history", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
        })
            .then((response) => response.json())
            .catch((error) => console.error(error));
    };

    const handleTimerClick = () => {
        if (workoutFinished) return;

        setStop(true);

        if (isWorkoutOngoing()) {
            setRest(!rest);
            setTimer(0);
            setStop(false);
        } else {
            setWorkoutFinished(true);
            saveWorkout();
        }
    };

    return (
        <div onClick={() => handleTimerClick()} className="timer">
            <div className="timer-content">
                {rest && <p>Rest</p>}
                {!rest && <p>Train</p>}
                {rest && <p>{timer}</p>}
                {workoutFinished && <p>Workout finished!</p>}
                <div className="feedback-animation">
                    <p id="feedback">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
