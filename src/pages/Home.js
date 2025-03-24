import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Добро пожаловать!</h1>

            {/* Блок с видео */}
            {/*<div className="video-container">*/}
            {/*    <video controls className="home-video">*/}
            {/*        <source src="../files/cats.mp4" type="video/mp4" />*/}
            {/*        Ваш браузер не поддерживает видео.*/}
            {/*    </video>*/}
            {/*</div>*/}

            {/* Кнопки навигации */}
            <div className="button-container">
                <Link to="/crossword" className="nav-button">Кроссворд</Link>
                <Link to="/examples" className="nav-button">Примеры</Link>
                <Link to="/tasks" className="nav-button">Задание</Link>
                <Link to="/files" className="nav-button">Файлы</Link>
                <Link to="/css-animation" className="nav-button">CSS Анимации</Link>
            </div>
        </div>
    );
}

export default Home;
