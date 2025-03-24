import React from "react";
import "../styles/Tasks.css";
import { Link } from "react-router-dom";
import CssAnimationPage from "../components/css-animation-playground/CssAnimationPage";

function Tasks() {
    const tasks = [
        {
            id: 1,
            title: "Задание №1",
            description: "Уровень сложности: НОВИЧОК.",
            action: "Перейти к заданию"
        },
        {
            id: 2,
            title: "Задание №2",
            description: "Уровень сложности: СТАЛКЕР.",
            action: "Перейти к заданию"
        },
        {
            id: 3,
            title: "Задание №3",
            description: "Уровень сложности: ВЕТЕРАН.",
            action: "Перейти к заданию"
        },
        {
            id: 4,
            title: "Задание №4",
            description: "Уровень сложности: МАСТЕР.",
            action: "Перейти к заданию"
        }
    ];

    return (
        <div className="tasks-container">
            {/* Навигация */}
            <nav className="navbar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/crossword" className="nav-link">Кроссворд</Link>
                <Link to="/examples" className="nav-link">Примеры</Link>
                <Link to="/tasks" className="nav-link active">Задания</Link>
                <Link to="/files" className="nav-link">Файлы</Link>
            </nav>

            <h1 className="tasks-title">Задания</h1>

            {/* Список заданий */}
            <div className="tasks-list">
                {tasks.map(task => (
                    <div key={task.id} className="task-card">
                        <h3 className="task-title">{task.title}</h3>
                        <p className="task-description">{task.description}</p>
                        <button className="task-btn">{task.action}</button>
                    </div>
                ))}
            </div>

            {/* Блок с CSS-компилятором */}
            <div className="compiler-container">
                <CssAnimationPage />
            </div>
        </div>
    );
}

export default Tasks;
