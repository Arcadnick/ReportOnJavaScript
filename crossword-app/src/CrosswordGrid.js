import React from 'react';
import './CrosswordGrid.css'; // Подключим стили позже

function CrosswordGrid({ grid }) {
    return (
        <table className="crossword-grid">
            <tbody>
            {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="cell">
                            <input
                                type="text"
                                maxLength="1"
                                value={cell === ' ' ? '' : cell}
                                readOnly
                            />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default CrosswordGrid;