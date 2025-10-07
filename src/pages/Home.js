import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Анимация фона */}
            <div className="animated-background"></div>
            <div className="animated-lines">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="line"></div>
                ))}
            </div>

            <h1 className="home-title">Добро пожаловать!</h1>

            {/* Кнопки навигации */}
            <div className="button-container">
                <Link to="/examples" className="nav-button">Примеры</Link>
                <Link to="/crossword" className="nav-button">Кроссворд</Link>
                <Link to="/tasks" className="nav-button">Задания</Link>
                <Link to="/files" className="nav-button">Файлы</Link>
            </div>

            {/* Баннер */}
            <div className="banner">
                <p>Здесь вы найдете примеры анимаций, кроссворд, задания и какие-то файлы..</p>
            </div>

            {/* GIF */}
            <div className="gif-container">
                <img src={"/files/oia-uia.gif"} alt="Animation" className="gif-image" />
            </div>

            {/* Копирайт */}
            <footer className="copyright">© by Saidovka</footer>
        </div>
    );
}

export default Home;
