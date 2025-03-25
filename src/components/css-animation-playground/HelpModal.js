const HelpModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;
  
  return (
    <div className="help-modal-overlay">
      <div className="help-modal-content">
        <div className="help-modal-header">
          <h2 className="help-modal-title">Справка и советы</h2>
          <button 
            onClick={onClose}
            className="close-button"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="help-modal-section">
            <h2>Как использовать</h2>
            <div className="example-item">
              <p>Отредактируйте код CSS-анимации в редакторе ниже, затем нажмите "Run Animation", чтобы увидеть, как она применяется к 2D квадрату.
                Редактор уже содержит образец анимации, чтобы вы могли начать.</p>
            </div>
          </div>

          <div className="help-modal-section">
            <h2>Полезные советы</h2>

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