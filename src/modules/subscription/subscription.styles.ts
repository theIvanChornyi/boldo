import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { MANROPE_REGULAR } from '../../shared/const/fonts.const';
import {
  laptopMedia,
  mobileMedia,
  tabletMedia,
} from '../../shared/styles/screen-breackpoint-media.styles';

export const section = css`
  padding: 90px 100px;
  max-width: 1400px;
  margin: 0 auto;
  ${tabletMedia`
    padding: 20px 30px;
  `}

  ${mobileMedia`
    padding: 20px 0;
  `}
`;

export const contentWrapper = css`
  position: relative;
  padding: 72px 242px;
  background-color: ${COLORS.OXFORD_BLUE};
  border-radius: 12px;

  ${laptopMedia`
    padding: 20px 30px;
  `}

  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    overflow: hidden;
    top: -1054px;
    right: -559px;
    width: 1300px;
    height: 1300px;
    border-radius: 50%;
    background-color: ${COLORS.INDIGO};
  }
`;

export const title = css`
  ${MANROPE_REGULAR};
  z-index: 2;
  position: relative;
  color: ${COLORS.WHITE};
  font-size: 48px;
  line-height: 1.5;
  text-align: center;

  ${laptopMedia`
    font-size: 36px;
  `}

  ${tabletMedia`
    font-size: 24px;
  `}
`;

export const form = css`
  z-index: 2;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 50px;
`;
