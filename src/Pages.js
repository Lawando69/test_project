import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import ExercisePage from "./Pages/Exercise/Exercise";
import AboutPage from "./Pages/About/About";
import AuthPage from "./Pages/Auth/Auth";

export default function Pages(){
    return(
        <main id="page_content">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/exercise" element={<ExercisePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
            </Routes>
        </main>
    )
}
