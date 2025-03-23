import React from 'react';
import './Questions.css'; // Подключим стили позже

function Questions({ questions }) {
    return (
        <div className="questions">
            <h2>По горизонтали</h2>
            <ul>
                {questions.across.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
            <h2>По вертикали</h2>
            <ul>
                {questions.down.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>
    );
}

export default Questions;