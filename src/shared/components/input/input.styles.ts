import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { OPEN_SANS_REGULAR } from '../../const/fonts.const';

export const inputWrapper = css`
  position: relative;
`;
export const input = css`
  min-width: 370px;
  padding: 12px 32px;

  ${OPEN_SANS_REGULAR};
  font-size: 20px;
  line-height: 1.6;
  color: ${COLORS.BLACK};

  border: none;
  border-radius: 240px;

  &::placeholder {
    color: ${COLORS.BLACK};
  }

  &:focus {
    outline: none;
  }
`;

export const errorMessage = css`
  position: absolute;

  top: -50%;
  left: 50%;

  transform: translateX(-50%);

  text-align: center;
  color: ${COLORS.SPIRO_DISCO_BALL};
`;
