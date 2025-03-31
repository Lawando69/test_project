import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import ExercisePage from "./Pages/Exercise/Exercise";
import AboutPage from "./Pages/About/About";

export default function Pages(){
    console.log("HomePage:", HomePage);
    console.log("ExercisePage:", ExercisePage);
    console.log("AboutPage:", AboutPage);
    return(
        <main className="page_content">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/exercise" element={<ExercisePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </main>
    )
}
