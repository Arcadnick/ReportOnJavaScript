import React from "react";
import "../styles/Tasks.css";
import { Link } from "react-router-dom";
import CssAnimationPage from "../components/css-animation-playground/CssAnimationPage";

function Tasks() {
    const tasks = [
        {
            id: 1,
            title: "CSS Transition",
            description: "Изучите свойство CSS для плавных переходов между состояниями элементов.",
            action: "Перейти к заданию"
        },
        {
            id: 2,
            title: "JavaScript Animations",
            description: "Напишите анимации с помощью JavaScript и свяжите их с действиями пользователя.",
            action: "Перейти к заданию"
        },
        {
            id: 3,
            title: "Crossword Challenge",
            description: "Заполните кроссворд на тему веб-разработки.",
            action: "Перейти к заданию"
        },
        {
            id: 4,
            title: "Responsive Web Design",
            description: "Разработайте адаптивную верстку для сайта, которая будет корректно отображаться на разных устройствах.",
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
                <Link to="/tasks" className="nav-link active">Задание</Link>
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
                {/*<h2 className="compiler-title">CSS Animation Playground</h2>*/}
                <CssAnimationPage />
            </div>
        </div>
    );
}

export default Tasks;
