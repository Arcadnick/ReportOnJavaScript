import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Examples.css";

function Examples() {
    // Состояние для хранения выбранной анимации
    const [selectedAnimation, setSelectedAnimation] = useState(null);

    // Список анимаций
    const animations = [
        {
            id: 1,
            name: "Смена цвета",
            className: "color-change",
            code: `@keyframes colorChange {
    from { background: #ff4b1f; }
    to { background: #1fa2ff; }
}`
        },
        {
            id: 2,
            name: "Движение",
            className: "move-trajectory",
            code: `@keyframes moveTrajectory {
    0% { transform: translateX(0); }
    50% { transform: translateX(30px) translateY(20px); }
    100% { transform: translateX(0); }
}`
        },
        {
            id: 3,
            name: "Вращение",
            className: "rotate",
            code: `@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`
        },
        {
            id: 4,
            name: "Закругление",
            className: "border-radius",
            code: `@keyframes borderRadius {
    from { border-radius: 10px; }
    to { border-radius: 50%; }
}`
        },
        {
            id: 5,
            name: "Пульсация",
            className: "pulse",
            code: `@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
}`
        },
        {
            id: 6,
            name: "Прозрачность",
            className: "fade",
            code: `@keyframes fadeEffect {
    0% { opacity: 1; }
    100% { opacity: 0.2; }
}`
        }
    ];

    return (
        <div className="examples-container">
            {/* Навигация */}
            <nav className="navbar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/examples" className="nav-link active">Примеры</Link>
                <Link to="/crossword" className="nav-link">Кроссворд</Link>
                <Link to="/tasks" className="nav-link">Задания</Link>
                <Link to="/files" className="nav-link">Файлы</Link>
            </nav>

            <h1 className="examples-title">Примеры анимаций</h1>

            <div className="animations-grid">
                {animations.map(animation => (
                    <div
                        key={animation.id}
                        className={`animation-card ${animation.className}`}
                        onClick={() => setSelectedAnimation(animation)}
                    >
                        <p>{animation.name}</p>
                    </div>
                ))}
            </div>

            <h3>Примечание: можно нажать на любой пример и появится код ;)</h3>

            {selectedAnimation && (
                <div className="modal" onClick={() => setSelectedAnimation(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedAnimation(null)}>✖</button>
                        <h2 style={{color:'black'}}>{selectedAnimation.name}</h2>
                        <pre className="codereview"><code>{selectedAnimation.code}</code></pre>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Examples;