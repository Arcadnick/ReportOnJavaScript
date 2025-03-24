import { useState, useEffect } from 'react';
import CssEditor from './CssEditor';
import SquarePreview from './SquarePreview';
import HelpModal from './HelpModal';
import useStyleApplication from './useStyleApplication';

// CSS для страницы
import './CssAnimationPageStyles.css';

// Дефолтный CSS с примером анимации
const DEFAULT_CSS = `@keyframes squareAnimation {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100px, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
  75% {
    transform: translate(0, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animated-square {
  animation: squareAnimation 2s infinite;
}`;

const CssAnimationPage = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { applyStyle } = useStyleApplication();
  
  // Инициализация анимации при первой загрузке страницы
  useEffect(() => {
    // Небольшая задержка чтобы DOM полностью загрузился
    const timer = setTimeout(() => {
      try {
        console.log('Инициализация анимации при загрузке страницы');
        applyStyle(DEFAULT_CSS);
        setIsAnimating(true);
      } catch (error) {
        console.error('Ошибка при инициализации стилей:', error);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="css-animation-page">
        {/* Header */}
        <div className="header">
          <h1>CSS Компилятор Анимаций</h1>
        </div>

        {/* Main content area */}
        <div className="main-container">
          <CssEditor
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationStop={() => setIsAnimating(false)}
          />
          <SquarePreview isAnimating={isAnimating}/>
        </div>

          <button
              onClick={() => setIsHelpModalOpen(true)}
              className="btn-help"
          >Показать справку и советы.</button>

        {/* Help Modal */}
        <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)}/>
      </div>
  );
};

export default CssAnimationPage;