import { useState, useRef, useEffect } from 'react';

const SquarePreview = ({ isAnimating }) => {
  const [isPaused, setIsPaused] = useState(false);
  const squareRef = useRef(null);
  const styleRef = useRef(null);

  // Применение кастомных стилей
  const applyCustomStyles = () => {
    // Получаем стили, которые были добавлены через useStyleApplication
    const styleElement = document.getElementById('animation-style');
    if (styleElement && styleRef.current) {
      styleRef.current.textContent = styleElement.textContent;
    }
  };
  
  // Слушаем событие изменения стилей
  useEffect(() => {
    const handleStyleChange = () => {
      applyCustomStyles();
    };
    
    // Добавляем слушатель события
    document.addEventListener('animationStyleChange', handleStyleChange);
    
    // Очищаем слушатель при размонтировании
    return () => {
      document.removeEventListener('animationStyleChange', handleStyleChange);
    };
  }, []);

  // При изменении состояния анимации
  useEffect(() => {
    if (isAnimating && squareRef.current) {
      // Проверяем наличие кастомных стилей и применяем их
      applyCustomStyles();
      
      // Имитируем перезапуск анимации (убираем и снова добавляем класс)
      squareRef.current.classList.remove('animated-square');
      // Триггерим reflow
      void squareRef.current.offsetWidth;
      // Добавляем класс снова
      setTimeout(() => {
        if (squareRef.current) {
          squareRef.current.classList.add('animated-square');
        }
      }, 10);
    }
  }, [isAnimating]);

  // Обработка паузы/возобновления анимации
  const togglePause = () => {
    if (squareRef.current) {
      if (isPaused) {
        squareRef.current.style.animationPlayState = 'running';
      } else {
        squareRef.current.style.animationPlayState = 'paused';
      }
      setIsPaused(!isPaused);
    }
  };

  // Сброс анимации
  const resetAnimation = () => {
    if (squareRef.current) {
      // Останавливаем анимацию
      squareRef.current.style.animation = 'none';
      
      // Триггерим reflow
      void squareRef.current.offsetWidth;
      
      // Запускаем анимацию заново
      squareRef.current.style.animation = '';
      
      // Убедимся, что класс анимации всё еще есть
      if (!squareRef.current.classList.contains('animated-square')) {
        squareRef.current.classList.add('animated-square');
      }
      
      // Устанавливаем состояние на "не приостановлено"
      if (isPaused) {
        squareRef.current.style.animationPlayState = 'running';
        setIsPaused(false);
      }
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2 className="preview-title">Preview</h2>
        <div className="preview-controls">
          <button 
            onClick={togglePause}
            className="btn-secondary"
            disabled={!isAnimating}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button 
            onClick={resetAnimation}
            className="btn-secondary"
            disabled={!isAnimating}
          >
            Reset
          </button>
        </div>
      </div>
      
      <div className="preview-area">
        <div 
          ref={squareRef}
          className={isAnimating ? 'square animated-square' : 'square'}
        ></div>
        
        {/* Динамический стиль для анимации */}
        <style ref={styleRef} id="square-animation-style"></style>
        
        {isAnimating && (
          <div className="status-messages">
            {isPaused ? 'Анимация приостановлена' : 'Анимация запущена'}
          </div>
        )}
      </div>
      
      <div className="p-4 text-sm text-primary">
        {isAnimating 
          ? (isPaused ? 'Нажмите "Resume" для продолжения.' : '')
          : 'Нажмите "Run Animation" для запуска анимации.'}
      </div>
    </div>
  );
};

export default SquarePreview;