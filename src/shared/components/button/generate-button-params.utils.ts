import { COLORS } from '../../const/colors.const';
import { IButtonStylesParams, SIZE, VARIANT } from './button.types';

export const generateButtonParams = (
  variant: VARIANT,
  size: SIZE
): IButtonStylesParams => {
  let borderColor: string = COLORS.MEDIUM_AQUAMARINE;
  let backgroundColor: string = COLORS.MEDIUM_AQUAMARINE;
  let textColor: string = COLORS.OXFORD_BLUE;

  let padding: string = '8px 40px';
  let borderRadius: number = 24;
  let fontSize: string = '1rem';
  let lineHeight: string = '1.5';

  switch (variant) {
    case VARIANT.DARK:
      borderColor = COLORS.OXFORD_BLUE;
      backgroundColor = COLORS.OXFORD_BLUE;
      textColor = COLORS.WHITE;
      break;
    case VARIANT.DISABLED:
      borderColor = COLORS.WHITE;
      backgroundColor = 'transparent';
      textColor = COLORS.WHITE;
      break;
    case VARIANT.LIGHT:
      borderColor = COLORS.WHITE;
      backgroundColor = COLORS.WHITE;
      textColor = COLORS.OXFORD_BLUE;
      break;
    case VARIANT.TRANSPARENT:
      borderColor = COLORS.OXFORD_BLUE;
      backgroundColor = 'transparent';
      textColor = COLORS.OXFORD_BLUE;
      break;
    case VARIANT.TRANSPARENT_LIGHT:
      borderColor = COLORS.WHITE;
      backgroundColor = 'transparent';
      textColor = COLORS.WHITE;
      break;
    default:
      break;
  }

  switch (size) {
    case SIZE.LARGE:
      padding = '16px 56px';
      borderRadius = 56;
      fontSize = '1.25rem';
      lineHeight = '1.4';
      break;
    default:
      break;
  }

  return {
    borderColor,
    backgroundColor,
    textColor,
    padding,
    borderRadius,
    fontSize,
    lineHeight,
  };
};
