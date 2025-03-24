import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crossword from "./pages/CrosswordAdvanced";
import Examples from "./pages/Examples";
import Files from "./pages/Files";
import Tasks from "./pages/Tasks";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/crossword" element={<Crossword />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/files" element={<Files />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </Router>
    );
}

export default App;