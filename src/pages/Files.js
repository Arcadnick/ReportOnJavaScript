import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Files.css";

function Files() {
    const navigate = useNavigate();

    const files = {
        presentation: {
            name: "Презентация",
            pdf: "/.files/presentation.pdf",
            icon: "📽"},
        report: {
            name: "Доклад",
            pdf: "/.files/report.pdf",
            icon: "📔" },
        // examples: {
        //     name: "Примеры",
        //     pdf: "/.files/examples.pdf",
        //     zip: "/.files/examples.zip",
        //     icon: "💻"
        //}
    };

    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="files-container">
            {/* Навигация */}
            <nav className="navbar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/examples" className="nav-link">Примеры</Link>
                <Link to="/crossword" className="nav-link">Кроссворд</Link>
                <Link to="/tasks" className="nav-link">Задания</Link>
                <Link to="/files" className="nav-link active">Файлы</Link>
            </nav>

            <h1 className="files-title">Разные файлики</h1>

            <div className="files-content">
                {/* Левая панель с кнопками */}
                <div className="files-sidebar">
                    {Object.keys(files).map((key) => (
                        <button
                            key={key}
                            className={`file-button ${selectedFile === key ? "active" : ""}`}
                            onClick={() => setSelectedFile(key)}
                        >
                            {files[key].icon} {files[key].name}
                        </button>
                    ))}
                    {/* Гифка под кнопками */}
                    <button className="gif-button" onClick={() => navigate("/easteregg")}>
                        <img src={"/.files/download.gif"} alt="" className="sidebar-gif"/>
                    </button>
                </div>

                {/* Правая панель с предпросмотром */}
                <div className="files-preview">
                    <div className="preview-box">
                        {selectedFile ? (
                            <iframe
                                src={files[selectedFile].pdf}
                                title="File Preview"
                                className="pdf-viewer"
                            ></iframe>
                        ) : (
                            <p className="placeholder-text">Выберите файл для предпросмотра</p>
                        )}
                    </div>

                    {/* Кнопки скачивания */}
                    {selectedFile && (
                        <div className="download-buttons">
                            <a href={files[selectedFile].pdf} download className="download-button">
                                Скачать PDF
                            </a>
                            {selectedFile === "examples" && (
                                <a href={files[selectedFile].zip} download className="download-button">
                                    Скачать ZIP
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Files;
