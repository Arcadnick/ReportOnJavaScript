import { useState, useRef, useEffect } from 'react';
import useStyleApplication from './useStyleApplication';

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

const CssEditor = ({ onAnimationStart, onAnimationStop }) => {
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [statusMessage, setStatusMessage] = useState({ text: 'Ready to run', type: 'success' });
  const editorRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const { applyStyle, removeStyle } = useStyleApplication();

  // Обновляем номера строк при изменении кода
  useEffect(() => {
    updateLineNumbers();
  }, [cssCode]);

  // Создаем номера строк в редакторе
  const updateLineNumbers = () => {
    if (!lineNumbersRef.current) return;
    
    // Сначала очищаем существующие номера строк
    lineNumbersRef.current.innerHTML = '';
    
    // Создаем новые номера строк
    const lines = (cssCode || '').split('\n');
    for (let i = 0; i < lines.length; i++) {
      const div = document.createElement('div');
      div.textContent = (i + 1).toString();
      lineNumbersRef.current.appendChild(div);
    }
  };

  const handleEditorChange = (e) => {
    // Сохраняем выделение/позицию курсора
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const offset = range?.startOffset || 0;
    const node = range?.startContainer;
    
    if (editorRef.current) {
      setCssCode(editorRef.current.textContent || '');
      
      // Нужно использовать setTimeout, чтобы дать React время для обновления DOM
      setTimeout(() => {
        try {
          // Восстанавливаем позицию курсора
          if (selection && range && editorRef.current?.contains(node)) {
            selection.removeAllRanges();
            const newRange = document.createRange();
            newRange.setStart(node, offset);
            newRange.setEnd(node, offset);
            selection.addRange(newRange);
          }
        } catch (e) {
          console.log('Не удалось восстановить позицию курсора', e);
        }
      }, 0);
    }
  };

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand('insertText', false, '  ');
    }
  };

  const runAnimation = () => {
    try {
      // Сначала удаляем предыдущие стили
      removeStyle();
      
      // Небольшая задержка для правильного применения стилей
      setTimeout(() => {
        try {
          // Применяем новый CSS код
          applyStyle(cssCode);
          console.log('Анимация применена:', cssCode);
          setStatusMessage({ text: 'Анимация успешно применена', type: 'success' });
          onAnimationStart();
        } catch (innerError) {
          console.error('Ошибка при применении анимации:', innerError);
          let errorMessage = 'Ошибка при применении анимации';
          if (innerError instanceof Error) {
            errorMessage = innerError.message;
          }
          setStatusMessage({ text: errorMessage, type: 'error' });
          onAnimationStop();
        }
      }, 10);
    } catch (error) {
      console.error('Ошибка при удалении предыдущих стилей:', error);
      let errorMessage = 'Ошибка при применении анимации';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setStatusMessage({ text: errorMessage, type: 'error' });
      onAnimationStop();
    }
  };

  const resetEditor = () => {
    // Удаляем старые стили перед применением новых
    removeStyle();
    
    // Устанавливаем дефолтный CSS в редактор
    setCssCode(DEFAULT_CSS);
    
    // Применяем дефолтную анимацию после небольшой задержки
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
          <button 
            onClick={resetEditor}
            className="btn-secondary"
          >
            Reset
          </button>
          <button 
            onClick={runAnimation}
            className="btn-primary"
          >
            Run Animation
          </button>
        </div>
      </div>
      
      <div className="editor-wrapper">
        <div ref={lineNumbersRef} className="line-numbers"></div>
        
        <pre 
          ref={editorRef}
          id="css-editor"
          className="css-code"
          contentEditable="true"
          spellCheck="false"
          onInput={handleEditorChange}
          onKeyDown={handleTabKey}
          suppressContentEditableWarning={true}
        >
          {cssCode}
        </pre>
      </div>
      
      {/* Status bar */}
      <div className={`p-2 text-sm ${statusMessage.type === 'success' ? 'text-success' : 'text-error'}`}>
        {statusMessage.type === 'success' ? '✓' : '⚠'} {statusMessage.text}
      </div>
      
      <style>{`
        .line-numbers {
          display: flex;
          flex-direction: column;
        }
        .line-numbers > div {
          display: block;
          width: 30px;
          padding-right: 10px;
          text-align: right;
          color: #6b7280;
          height: 1.5em;
        }
      `}</style>
    </div>
  );
};

export default CssEditor;