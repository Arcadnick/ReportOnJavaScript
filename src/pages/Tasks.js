import React, { useState } from "react";
import "../styles/Tasks.css";
import { Link } from "react-router-dom";
import CssAnimationPage from "../components/css-animation-playground/CssAnimationPage";

function Tasks() {
    const [activeTask, setActiveTask] = useState(null);

    const tasks = [
        {
            id: 1,
            title: "Задание №1",
            description: "Уровень сложности: НОВИЧОК.",
            action: "Перейти к заданию",
            details: "В этом задании нужно сделать так, что бы квадрат двигался в обратном направлении.",
            example: "/.files/examples/1.gif"
        },
        {
            id: 2,
            title: "Задание №2",
            description: "Уровень сложности: СТАЛКЕР.",
            action: "Перейти к заданию",
            details: "В этом задании нужно сделать так, что бы квадрат во время движения крутился вокруг своей оси.",
            example: "/.files/examples/2.gif"
        },
        {
            id: 3,
            title: "Задание №3",
            description: "Уровень сложности: ВЕТЕРАН.",
            action: "Перейти к заданию",
            details: "В этом задании нужно сделать так, что бы квадрат двигался по траектории треугольника пульсировал, менял цвета и форму.",
            example: "/.files/examples/3.gif"
        },
        {
            id: 4,
            title: "Задание №4",
            description: "Уровень сложности: МАСТЕР.",
            action: "Перейти к заданию",
            details: "Представьте, что ваша фантазия — это крылья, которые могут поднять вас над повседневностью и унести в миры, где нет границ и ограничений. В этих мирах вы можете создавать все, что пожелаете, и быть кем угодно. Дайте своей фантазии свободу, и вы откроете для себя бесконечные возможности и новые горизонты, которые скрыты за пределами обыденного восприятия.",
            example: "/.files/examples/4.gif"
        }
    ];

    return (
        <div className="tasks-container">
            {/* Навигация */}
            <nav className="navbar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/examples" className="nav-link">Примеры</Link>
                <Link to="/crossword" className="nav-link">Кроссворд</Link>
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
                        <button className="task-btn" onClick={() => setActiveTask(task)}>
                            {task.action}
                        </button>
                    </div>
                ))}
            </div>

            {/* Всплывающее окно */}
            {activeTask && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setActiveTask(null)}>&times;</span>
                        <div className="modal-body">
                            {/* Левая сторона — Описание задания */}
                            <div className="task-details">
                                <h2>{activeTask.title}</h2>
                                <p>{activeTask.details}</p>
                            </div>
                            {/* Правая сторона — Пример выполнения */}
                            <div className="task-example">
                                <img src={activeTask.example} alt="Пример выполнения" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Блок с CSS-компилятором */}
            <div className="compiler-container">
                <CssAnimationPage />
            </div>
        </div>
    );
}

export default Tasks;