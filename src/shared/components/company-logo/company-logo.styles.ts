import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { MANROPE_BOLD } from '../../const/fonts.const';

export const link = css`
  display: flex;
  column-gap: 11.27px;
  text-decoration: none;
  user-select: none;
`;

export const picture = css``;

export const text = css`
  ${MANROPE_BOLD}
  font-size: 43px;
  line-height: 78%;
  color: ${COLORS.WHITE};
`;
