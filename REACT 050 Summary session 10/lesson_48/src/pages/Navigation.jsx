import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
};

export default Navigation;