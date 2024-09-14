const Workout = ({ session }) => {
    return (
        <div className="workout">
            <div className="workout-content">
                <h1>{session.name}</h1>
                <p>{session.id}</p>
            </div>
        </div>
    );
};

export default Workout;
