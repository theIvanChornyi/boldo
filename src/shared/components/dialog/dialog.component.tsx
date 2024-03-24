import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import * as css from './dialog.styles';

interface IProps {
  children:
    | React.JSX.Element
    | Array<React.JSX.Element>
    | string
    | Array<string | React.JSX.Element>;

  isOpen: boolean;
  close: () => void;
}

const Dialog: React.FC<IProps> = ({ children, close, isOpen }) => {
  const nodeRef = useRef(null);

  const keyClose = useCallback(
    (e: KeyboardEvent): void => {
      if (e.keyCode === 27) {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
        window.addEventListener('keydown', keyClose);
      }
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', keyClose);
    };
  }, [isOpen, keyClose]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      unmountOnExit={true}
      classNames={css.defaultclassNames}
    >
      <div onClick={onClick} className={css.backdrop} ref={nodeRef}>
        <div className={css.dialog}>
          <button type="button" onClick={close} className={css.closeBtn}>
            X
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default Dialog;
