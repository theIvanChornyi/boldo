import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { MANROPE_REGULAR, OPEN_SANS_REGULAR } from '../../const/fonts.const';
import {
  mobileMedia,
  tabletMedia,
} from '../../styles/screen-breackpoint-media.styles';

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

  ${tabletMedia`
    font-size: 36px;
  `}

  ${mobileMedia`
    font-size: 24px;
  `}
`;
export const subTitle = css`
  ${OPEN_SANS_REGULAR}
  font-size: 20px;
  line-height: 1.6;
  color: ${COLORS.SONIK_SILVER};

  ${tabletMedia`
    font-size: 18px;
  `}

  ${mobileMedia`
    font-size: 16px;
  `}
`;
