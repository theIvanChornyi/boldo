import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { MANROPE_REGULAR, OPEN_SANS_REGULAR } from '../../const/fonts.const';

export const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  max-width: 842px;
  row-gap: 12px;

  margin: 0 auto;
  text-align: center;
`;
export const title = css`
  ${MANROPE_REGULAR}
  font-size: 48px;
  line-height: 1.5;
  color: ${COLORS.BLACK};
`;
export const subTitle = css`
  ${OPEN_SANS_REGULAR}
  font-size: 20px;
  line-height: 1.6;
  color: ${COLORS.SONIK_SILVER};
`;
