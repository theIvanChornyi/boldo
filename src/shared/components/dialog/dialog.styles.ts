import { css, CSSObject } from '@emotion/css';
import { COLORS } from '../../const/colors.const';

export interface ITextStyleProps {
  duration: number;
  styles?: CSSObject;
}

export const enterActive = css`
  opacity: 0;
`;
export const exitDone = css`
  opacity: 1;
`;

export const enterDone = ({ duration }: ITextStyleProps): string => {
  return css`
    opacity: 1;
    transition: all ${duration}ms;
  `;
};

export const exitActive = ({ duration }: ITextStyleProps): string => {
  return css`
    opacity: 0;
    transition: all ${duration}ms;
  `;
};

export const defaultclassNames = {
  enterActive: enterActive,
  enterDone: enterDone({
    duration: 200,
  }),
  exitActive: exitActive({
    duration: 200,
  }),
  exitDone: exitDone,
};

export const backdrop = css`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: linear-gradient(
    0deg,
    rgba(21, 22, 26, 0.5) 0%,
    rgba(21, 22, 26, 0.5) 100%
  );
`;

export const dialog = css`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 320px;
  height: 320px;

  maxheight: 80vh;

  border-radius: 12px;
  background: ${COLORS.MEDIUM_AQUAMARINE};

  transform: translate(-50%, -50%);
`;

export const closeBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 300px;
  position: absolute;

  right: -16px;
  top: -16px;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.OXFORD_BLUE};
  color: ${COLORS.OXFORD_BLUE};
`;
