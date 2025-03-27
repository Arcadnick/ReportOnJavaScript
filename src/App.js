import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crossword from "./pages/CrosswordAdvanced";
import Examples from "./pages/Examples";
import Files from "./pages/Files";
import Tasks from "./pages/Tasks";
import CssAnimationPage from './components/css-animation-playground/CssAnimationPage';
import EasterEgg from "./pages/EasterEgg";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/crossword" element={<Crossword />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/files" element={<Files />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/css-animation" element={<CssAnimationPage />} />
                <Route path="/easteregg" element={<EasterEgg />} />
            </Routes>
        </Router>
    );
}

export default App;