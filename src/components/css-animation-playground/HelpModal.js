import { useState } from 'react';

const HelpModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('examples');
  
  if (!isOpen) return null;
  
  return (
    <div className="help-modal-overlay">
      <div className="help-modal-content">
        <div className="help-modal-header">
          <h2 className="help-modal-title">Помощь и примеры</h2>
          <button 
            onClick={onClose}
            className="close-button"
          >
            ✕
          </button>
        </div>
        
        <div className="flex mb-4 border-b border-gray-200">
          <button 
            className={`py-2 px-4 ${activeTab === 'examples' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            onClick={() => setActiveTab('examples')}
          >
            Примеры
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'tips' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
            onClick={() => setActiveTab('tips')}
          >
            Советы
          </button>
        </div>
        
        <div className="overflow-y-auto">
          {activeTab === 'examples' ? (
            <div className="help-modal-section">
              <h3>Примеры CSS-анимаций</h3>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Вращение</h4>
                <pre>
{`@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.square {
  animation: rotate 2s linear infinite;
}`}
                </pre>
              </div>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Пульсация</h4>
                <pre>
{`@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.square {
  animation: pulse 1.5s ease-in-out infinite;
}`}
                </pre>
              </div>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Движение по траектории</h4>
                <pre>
{`@keyframes squareAnimation {
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

.square {
  animation: squareAnimation 4s linear infinite;
}`}
                </pre>
              </div>
            </div>
          ) : (
            <div className="help-modal-section">
              <h3>Полезные советы</h3>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Свойства анимации</h4>
                <p>
                  Вы можете настраивать различные аспекты анимации, включая время выполнения, функцию плавности (ease, linear, ease-in-out), 
                  задержку и количество повторений.
                </p>
                <pre>
{`.square {
  animation-name: example;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /* Или короткая запись */
  animation: example 2s ease-in-out 1s infinite alternate;
}`}
                </pre>
              </div>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Множественные анимации</h4>
                <p>
                  Вы можете применить несколько анимаций к одному элементу, разделяя их запятыми.
                </p>
                <pre>
{`.square {
  animation: rotate 3s linear infinite, pulse 1.5s ease infinite;
}`}
                </pre>
              </div>
              
              <div className="example-item">
                <h4 className="font-medium mb-2">Управление анимацией</h4>
                <p>
                  Вы можете использовать свойство animation-play-state для управления запуском и остановкой анимации.
                </p>
                <pre>
{`.square {
  animation: rotate 2s linear infinite;
  animation-play-state: running; /* или paused */
}`}
                </pre>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-4 text-right">
          <button 
            onClick={onClose}
            className="btn-primary"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;