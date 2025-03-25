
import { useState, useRef } from 'react';
import useStyleApplication from './useStyleApplication';

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

const CssEditor = ({ onAnimationStart, onAnimationStop }) => {
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [statusMessage, setStatusMessage] = useState({ text: 'Ready to run', type: 'success' });
  const { applyStyle, removeStyle } = useStyleApplication();

  const handleEditorChange = (e) => {
    setCssCode(e.target.value);
  };

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;

      const newValue = cssCode.substring(0, start) + '  ' + cssCode.substring(end);
      setCssCode(newValue);

      // Восстанавливаем позицию курсора
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const runAnimation = () => {
    try {
      applyStyle(cssCode);
      setStatusMessage({ text: 'Анимация успешно применена', type: 'success' });
      onAnimationStart();
    } catch (error) {
      console.error('Ошибка при применении анимации:', error);
      setStatusMessage({ text: 'Ошибка при применении анимации', type: 'error' });
      onAnimationStop();
    }
  };

  const resetEditor = () => {
    removeStyle();
    setCssCode(DEFAULT_CSS);
    setTimeout(() => {
      try {
        applyStyle(DEFAULT_CSS);
        setStatusMessage({ text: 'Сброс к исходному коду', type: 'success' });
        onAnimationStart();
      } catch (error) {
        console.error('Ошибка при сбросе анимации:', error);
        setStatusMessage({ text: 'Ошибка при сбросе анимации', type: 'error' });
      }
    }, 10);
  };

  return (
      <div className="editor-container">
        <div className="editor-header">
          <h2 className="editor-title">CSS Editor</h2>
          <div className="editor-controls">
            <button onClick={resetEditor} className="btn-secondary">Reset</button>
            <button onClick={runAnimation} className="btn-primary">Run Animation</button>
          </div>
        </div>

        <textarea
            value={cssCode}
            onChange={handleEditorChange}
            onKeyDown={handleTabKey}
            spellCheck="false"
            style={{
              padding: '10px',
              margin: 0,
              minHeight: '400px',
              width: '100%',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              outline: 'none',
              overflowY: 'auto',
              resize: 'vertical',
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
              border: 'none'
            }}
        />

        <div className={`status-bar p-2 text-sm ${statusMessage.type === 'success' ? 'text-success' : 'text-error'}`}>
          {statusMessage.type === 'success' ? '✓' : '⚠'} {statusMessage.text}
        </div>
      </div>
  );
};

export default CssEditor;
