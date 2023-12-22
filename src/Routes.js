import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tracking } from "./pages/Tracking";
import { SignIn } from "./pages/SignIn";
import { Landing } from "./pages/Landing";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={ <SignIn />}>
                   
                </Route>
                <Route path="/tracking" element={ <Tracking/> }>
                   
                </Route>
                <Route path="/" element={ <Landing />}>

                </Route>
            </Routes>
        </Router>
    )
}