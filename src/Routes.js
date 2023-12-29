import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tracking } from "./pages/Tracking";
import { SignIn } from "./pages/SignIn";
import { Landing } from "./pages/Landing";
import { CreateAccount } from "./pages/createAccount";

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
                <Route path="/create-account" element={<CreateAccount />}></Route>
            </Routes>
        </Router>
    )
}