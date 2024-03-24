import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { MANROPE_REGULAR } from '../../shared/const/fonts.const';

export const section = css`
  position: relative;
  padding: 55px 100px;

  background-color: ${COLORS.OXFORD_BLUE};

  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -789px;
    right: -670px;
    width: 1293px;
    height: 1293px;
    border-radius: 50%;
    background-color: ${COLORS.INDIGO};
  }
`;

export const contentWrapper = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
`;

export const imageContainer = css`
  max-width: 493px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  align-content: space-between;
  opacity: 1;

  & img {
    border-radius: 15px;
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
`;

export const mainTitle = css`
  ${MANROPE_REGULAR}
  color: ${COLORS.WHITE};
  font-size: 48px;
  line-height: 1.5;
`;

export const text = css`
  margin-top: 16px;
  color: ${COLORS.ANTI_FLASH_WHITE};
  line-height: 1.75;
  font-weight: 400;
`;

export const buttonsWrapper = css`
  display: flex;
  gap: 40px;
  margin-top: 40px;
`;

// #SLIDER
export const slider = css`
  margin-top: 56px;
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
