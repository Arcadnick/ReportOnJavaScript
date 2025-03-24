import { useRef, useCallback } from 'react';

/**
 * Хук для управления применением и удалением CSS стилей из документа
 */
export default function useStyleApplication() {
  const styleElementRef = useRef(null);
  const styleElementId = 'animation-style';

  /**
   * Применить указанный CSS-код к документу
   */
  const applyStyle = useCallback((cssCode) => {
    // Удаляем предыдущие стили, если они есть
    let styleElement = document.getElementById(styleElementId);
    if (styleElement) {
      styleElement.textContent = '';
    } else {
      // Создаем новый элемент стиля
      styleElement = document.createElement('style');
      styleElement.id = styleElementId;
      document.head.appendChild(styleElement);
    }

    // Применяем новые стили
    styleElement.textContent = cssCode;
    styleElementRef.current = styleElement;

    // Уведомляем все компоненты, заинтересованные в изменении стилей
    document.dispatchEvent(new CustomEvent('animationStyleChange', { detail: cssCode }));

    return cssCode;
  }, []);

  /**
   * Удалить примененный стиль из документа
   */
  const removeStyle = useCallback(() => {
    const styleElement = document.getElementById(styleElementId);
    if (styleElement) {
      styleElement.textContent = '';
    }
    styleElementRef.current = null;
    
    // Уведомляем все компоненты
    document.dispatchEvent(new CustomEvent('animationStyleChange', { detail: null }));
  }, []);

  return { applyStyle, removeStyle };
}