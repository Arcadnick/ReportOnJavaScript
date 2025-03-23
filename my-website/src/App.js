import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Crossword from "./pages/CrosswordAdvanced";
import Examples from "./pages/Examples";
import Files from "./pages/Files";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/crossword" element={<Crossword />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/files" element={<Files />} />
            </Routes>
        </Router>
    );
}

export default App;