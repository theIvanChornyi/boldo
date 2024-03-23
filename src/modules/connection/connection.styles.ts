import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { OPEN_SANS_SEMI_BOLD } from '../../shared/const/fonts.const';

export const section = css`
  padding: 120px 107px 226px;
`;

export const list = css`
  display: flex;
  flex-direction: column;
  row-gap: 120px;
`;

export const item = css`
  display: flex;
  justify-content: space-between;
  column-gap: 150px;
  &:nth-child(odd) {
    flex-flow: row-reverse;
  }
`;

export const imageWrapper = css`
  position: relative;
`;

export const content = css`
  max-width: 500px;
`;

export const chartLeft = css`
  position: absolute;
  top: 194px;
  left: 154px;
`;

export const advantageContainer = css`
  padding: 66px 0 65px;
`;

export const advantageList = css`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const advantageItem = css`
  display: flex;
  align-items: center;
  column-gap: 27px;

  font-size: 20px;
  line-height: 1.6;
  color: ${COLORS.BLACK};
`;

export const advantageButton = css`
  margin-top: 72px;
`;

export const tabsContainer = css`
  padding-top: 106px;
`;
export const tabsList = css`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const tabItem = (isActive: boolean = false): string => {
  return css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    width: 100%;
    min-height: 64px;

    padding: 20px;
    ${OPEN_SANS_SEMI_BOLD};
    color: ${isActive ? COLORS.WHITE : COLORS.BLACK};

    background-color: ${isActive ? COLORS.OXFORD_BLUE : 'inherit'};
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
    border-radius: 4px;

    transition: background-color 200ms linear, color 200ms linear;
  `;
};

export const tabIcon = (isActive: boolean = false): string => {
  return css`
    stroke: ${isActive ? COLORS.WHITE : COLORS.OXFORD_BLUE};
    transition: stroke 200ms linear;
  `;
};

export const chartRight = css`
  position: absolute;
  top: 276px;
  left: 16px;
`;
