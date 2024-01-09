import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tracking } from "./pages/Tracking";
import { SignIn } from "./pages/SignIn";
import { Landing } from "./pages/Landing";
import CreateAccount from "./pages/CreateAccount";
import CompletedWorkouts from "./Components/Workout/CompletedWorkouts.jsx"; // Corrected import
import WorkoutLanding from "./pages/workoutsLanding.jsx";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<SignIn />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/" element={<Landing />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/completed-workouts" element={<CompletedWorkouts />} />
                <Route path="/workoutLanding" element={<WorkoutLanding />} />

            </Routes>
        </Router>
    );
}
