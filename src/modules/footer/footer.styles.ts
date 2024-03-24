import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { tabletMedia } from '../../shared/styles/screen-breackpoint-media.styles';

export const footer = css`
  max-width: 1400px;
  margin: 0 auto;
  padding: 94px 100px 117px;

  display: flex;
  column-gap: 180px;
  row-gap: 40px;
  flex-wrap: wrap;

  ${tabletMedia`
    padding: 20px 30px 20px;
  `}
`;

export const logo = css`
  & span {
    color: ${COLORS.OXFORD_BLUE};
  }

  & path {
    fill: ${COLORS.OXFORD_BLUE};
  }
`;
export const info = css`
  max-width: 300px;
`;

export const text = css`
  color: ${COLORS.SONIK_SILVER};
`;
export const about = css`
  margin-top: 40px;
`;

export const rights = css`
  margin-top: 64px;
`;

export const navContainer = css`
  display: flex;
  column-gap: 88px;
  row-gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const navTitle = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;

export const navList = css`
  margin-top: 32px;

  min-width: 158px;

  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const navItem = css`
  display: flex;
  align-items: center;
  column-gap: 14px;

  & span {
    padding: 1px 14px;

    font-weight: 700;
    font-size: 13px;
    line-height: 2.15;
    color: ${COLORS.OXFORD_BLUE};

    border-radius: 120px;
    background-color: ${COLORS.MEDIUM_AQUAMARINE};
    user-select: none;
  }
`;
export const navLink = css`
  text-decoration: none;
  font-size: 20px;
  line-height: 160%;
  color: ${COLORS.SONIK_SILVER};

  transition: transform 200ms linear;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
