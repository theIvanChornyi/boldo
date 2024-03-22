import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { OPEN_SANS_BOLD } from '../../const/fonts.const';
import { SIZE, VARIANT } from './button.types';
import { generateButtonParams } from './generate-button-params.utils';

export const button = (variant: VARIANT, size: SIZE): string => {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    fontSize,
    lineHeight,
    padding,
    textColor,
  } = generateButtonParams(variant, size);

  return css`
    border: none;
    ${OPEN_SANS_BOLD}
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${padding};

    font-size: ${fontSize};
    line-height: ${lineHeight};

    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: ${borderRadius}px;
    border: 2px solid ${borderColor};

    &:hover,
    &:focus {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      transform: scale(1.03);
    }
    &:disabled {
      background-color: transparent;
      border-color: ${COLORS.WHITE};
      cursor: not-allowed;
      color: ${COLORS.WHITE};
    }

    transition: transform 200ms linear;
  `;
};
