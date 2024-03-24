import { css } from '@emotion/css';
import { COLORS } from '../../const/colors.const';
import { MANROPE_REGULAR } from '../../const/fonts.const';
import {
  mobileMedia,
  tabletMedia,
} from '../../styles/screen-breackpoint-media.styles';

export const title = css`
  ${MANROPE_REGULAR}
  font-size: 36px;
  line-height: 1.56;
  color: ${COLORS.BLACK};

  ${tabletMedia`
    font-size: 24px;
  `}

  ${mobileMedia`
    font-size: 20px;
  `}
`;
