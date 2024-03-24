import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { OPEN_SANS_SEMI_BOLD } from '../../shared/const/fonts.const';
import {
  desktopMedia,
  smalTabletMedia,
  tabletMedia,
} from '../../shared/styles/screen-breackpoint-media.styles';

export const header = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  margin: 0 auto;

  padding: 56px 100px 10px;

  z-index: 2;

  ${tabletMedia`
    padding: 20px 30px;
  `}
`;

export const navigation = css`
  display: flex;
  column-gap: 40px;
  ${smalTabletMedia`
    display: none;
  `}
`;

export const burgerNavigation = (isOpen: boolean = false): string => {
  return css`
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 200px;
    background: ${COLORS.OXFORD_BLUE};
    transition: transform 200ms linear;
    transform: translateY(${isOpen ? 0 : '-100%'});

    ${desktopMedia`
        display: none;
    `}
  `;
};

export const burgerButton = (isOpen: boolean = false): string => {
  return css`
    display: none;
    ${smalTabletMedia`
        display:block;
  `}

    background: transparent;
    border: none;
    & span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: red;
      border-radius: 3px;

      z-index: 1;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

      transform: ${isOpen ? 'rotate(45deg) translate(-10px, -6px)' : ''};
      background: ${COLORS.MEDIUM_AQUAMARINE};
    }

    & span:first-child {
    }

    & span:nth-last-child(2) {
      transform: ${isOpen ? 'rotate(-45deg) translate(0px, -4px)' : ''};
    }

    & span:nth-last-child(3) {
      opacity: ${isOpen ? 0 : 1};
    }
  `;
};

export const navigationLinksList = css`
  display: flex;
  align-items: center;
  column-gap: 40px;

  ${smalTabletMedia`
    flex-direction: column;
  `}
`;

export const navigationLink = css`
  display: block;
  padding: 6px 0;

  ${OPEN_SANS_SEMI_BOLD}
  color: ${COLORS.WHITE};
  text-decoration: none;
  transition: transform 200ms linear;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
