import React, { useState, useEffect } from "react";
import "../styles/CrosswordAdvanced.css";
import CrosswordGrid from "../components/CrosswordGrid";
import CluesPanel from "../components/CluesPanel";
import AnimationExamples from "../components/AnimationExamples";
import { gridData, words } from "../components/crosswordData";
import { Link } from "react-router-dom";

export default function CrosswordAdvanced() {
  const [activeClue, setActiveClue] = useState(null);
  const [showAnimationExamples, setShowAnimationExamples] = useState(false);
  const [completedWords, setCompletedWords] = useState(new Set());
  const [status, setStatus] = useState({
    message: "",
    type: "hidden"
  });

  const totalWords = words.horizontal.length + words.vertical.length;
  
  useEffect(() => {
    if (completedWords.size === totalWords) {
      setShowAnimationExamples(true);
    }
  }, [completedWords, totalWords]);
  
  const handleWordComplete = (word) => {
    setCompletedWords(prev => {
      const newSet = new Set(prev);
      newSet.add(word);
      return newSet;
    });
  };

  const handleWordIncomplete = (word) => {
    setCompletedWords(prev => {
      const newSet = new Set(prev);
      newSet.delete(word);
      return newSet;
    });
  };

  const resetPuzzle = () => {
    setCompletedWords(new Set());
    setStatus({
      message: "",
      type: "hidden"
    });
    setShowAnimationExamples(false);
  };

  const checkAnswers = (correctCells, incorrectCells, emptyCells) => {
    if (incorrectCells === 0 && emptyCells === 0) {
      setStatus({
        message: "Поздравляем! Все ответы верны!",
        type: "success"
      });
      // Показываем примеры анимаций при правильном заполнении
      setShowAnimationExamples(true);
    } else if (incorrectCells > 0) {
      setStatus({
        message: `${incorrectCells} букв неверны. Попробуйте еще раз!`,
        type: "error"
      });
    } else {
      setStatus({
        message: "Кроссворд не завершен. Продолжайте заполнять!",
        type: "warning"
      });
    }
  };

  const toggleAnimationExamples = () => {
    setShowAnimationExamples(prev => !prev);
  };

  return (
      <div className="crossword-advanced-container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/examples" className="nav-link">Примеры</Link>
          <Link to="/crossword" className="nav-link active">Кроссворд</Link>
          <Link to="/tasks" className="nav-link">Задания</Link>
          <Link to="/files" className="nav-link">Файлы</Link>
        </nav>

        <h1 className="crossword-advanced-title">Кроссворд</h1>


        <div className="crossword-advanced-content">
          <CrosswordGrid
              gridData={gridData}
              activeClue={activeClue}
              completedWords={completedWords}
              onWordComplete={handleWordComplete}
              onWordIncomplete={handleWordIncomplete}
              onCheckAnswers={checkAnswers}
              onResetPuzzle={resetPuzzle}
              totalWords={totalWords}
              status={status}
          />

          <CluesPanel
              words={words}
              activeClue={activeClue}
              setActiveClue={setActiveClue}
          />
        </div>

        <div className="animation-examples-toggle">
          <button
              className="toggle-examples-button"
              onClick={toggleAnimationExamples}
          >
            {showAnimationExamples ? "Скрыть примеры анимаций" : "Показать примеры анимаций"}
          </button>
        </div>

        {showAnimationExamples && (
            <AnimationExamples/>
        )}
      </div>
  );
}