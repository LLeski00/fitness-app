import { useEffect, useState } from "react";
import "./style/Workout.css";
import Timer from "./Timer";

const Workout = ({ session }) => {
    const [workout, setWorkout] = useState(null);
    const [currentExercise, setCurrentExercise] = useState(null);
    const [currentSet, setCurrentSet] = useState(0);

    useEffect(() => {
        createWorkout();
    }, []);

    const createWorkout = () => {
        let temp = session;
        for (let i = 0; i < temp.exercises.length; i++) {
            let numOfSets = temp.exercises[i].sets;
            temp.exercises[i].sets = [];
            for (let j = 0; j < numOfSets; j++) {
                temp.exercises[i].sets[j] = { time: 0, feedback: "" };
                console.log(temp);
            }
        }

        setWorkout(temp);
        setCurrentExercise(temp.exercises[0]);
    };

    return (
        <div className="workout">
            <div className="workout-content">
                <h1>{session.name}</h1>
                {currentExercise && (
                    <div className="workout-exercise">
                        <p>Exercise: {currentExercise.name}</p>
                        <p>Set: {currentSet + 1}</p>
                        <Timer
                            workout={workout}
                            setWorkout={setWorkout}
                            currentExercise={currentExercise}
                            setCurrentExercise={setCurrentExercise}
                            currentSet={currentSet}
                            setCurrentSet={setCurrentSet}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Workout;
