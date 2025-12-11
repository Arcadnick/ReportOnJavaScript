import React from "react";
import { Link } from "react-router-dom";
import "../styles/EasterEgg.css";

function EasterEgg() {
    return (
        <div className="easterEgg-container">
            {/* Навигация */}
            <nav className="navbar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/examples" className="nav-link">Примеры</Link>
                <Link to="/crossword" className="nav-link">Кроссворд</Link>
                <Link to="/tasks" className="nav-link">Задания</Link>
                <Link to="/files" className="nav-link">Файлы</Link>
            </nav>

            <h1 className="easterEgg-title">Прости, прощай, привет...</h1>

            {/* Баннер */}
            <div className="banner">
                <p>Пока, Andrew Kornew...</p>
            </div>
            <div className="banner">
                <p>Пока, Savely Krylov...</p>
            </div>
            <div className="banner">
                <p>Пока, Kirill Golubkov...</p>
            </div>
            <div className="banner">
                <p>Пока, Dmitry Lizhin...</p>
            </div>
            <div className="banner">
                <p>Пока, Ilyha...</p>
            </div>

        </div>
    );
}

export default EasterEgg;
