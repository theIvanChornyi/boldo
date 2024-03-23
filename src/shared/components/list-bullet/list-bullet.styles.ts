import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';

export const bullet = css`
  position: relative;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLORS.OXFORD_BLUE};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    background: ${COLORS.WHITE};
    height: 2px;
    border-radius: 4px;
  }

  &:before {
    left: 6px;
    width: 10px;
    transform: rotate(45deg) translateX(2px);
  }

  &:after {
    left: 11px;
    width: 18px;
    transform: rotate(-45deg) translateX(2px);
  }
`;
