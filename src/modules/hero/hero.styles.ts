import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { MANROPE_REGULAR } from '../../shared/const/fonts.const';
import {
  mobileMedia,
  tabletMedia,
} from '../../shared/styles/screen-breackpoint-media.styles';

export const contentWrapper = css`
  max-width: 1400px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  padding: 54px 100px 56px;
  margin: 0 auto 0;

  ${tabletMedia`
    justify-content: center;
    padding: 20px 30px 20px;
  `}
`;

export const imageContainer = css`
  max-width: 493px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  row-gap: 26px;

  & img {
    border-radius: 15px;
    display: block;

    ${tabletMedia`
        width:100%;
    `}
  }

  & :first-child {
    grid-column: span 2;
    grid-row: 1;
  }

  & :not(:first-child) {
    grid-row: 2;
  }

  & :nth-child(2),
  & :first-child {
    backdrop-filter: blur(68.71066284179688px);
    background: rgba(255, 255, 255, 0.18);
  }

  & :last-child {
    backdrop-filter: blur(133.1269073486328px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const main = css`
  max-width: 567px;
  padding: 56.5px 0;
  ${tabletMedia`
    padding: 0;
  `}
`;

export const mainTitle = css`
  ${MANROPE_REGULAR}
  color: ${COLORS.WHITE};
  font-size: 48px;
  line-height: 1.5;

  ${tabletMedia`
    font-size: 36px;
    text-align: center;
  `}

  ${mobileMedia`
    font-size: 24px;
  `}
`;

export const text = css`
  margin-top: 16px;
  color: ${COLORS.ANTI_FLASH_WHITE};
  line-height: 1.75;
  font-weight: 400;
`;

export const buttonsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  ${tabletMedia`
    justify-content: center;
  `}
`;

// #SLIDER
export const slider = css`
  max-width: 1200px;

  margin: 0 auto 0;
  padding: 0 6px !important;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 35%;
    height: 100%;
    z-index: 100;
    pointer-events: none;
  }

  &:before {
    left: 0;
    background: linear-gradient(
      to right,
      #0a2640 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      to left,
      #0a2640 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const slide = css`
  width: 145px !important;
  height: 42px !important;
`;

export const chartContainer = css`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
`;
