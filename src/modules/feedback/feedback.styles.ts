import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { OPEN_SANS_BOLD } from '../../shared/const/fonts.const';

export const section = css`
  position: relative;
  background-color: ${COLORS.OXFORD_BLUE};
  padding: 96px 150px;
`;

export const title = css`
  margin: 0;
  max-width: 716px;
  & h2 {
    color: ${COLORS.WHITE};
    text-align: left;
  }
`;

export const buttonsWrapper = css`
  position: absolute;
  top: 178px;
  right: 100px;
  display: flex;
  column-gap: 28px;
`;

export const sliderButton = (isMirror: boolean = false): string => {
  return css`
    width: 72px;
    height: 72px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: ${COLORS.WHITE};
    transition: transform 200ms linear;

    transform: scaleX(${isMirror ? -1 : 1});
    &:hover,
    &:focus {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      transform: scaleX(${isMirror ? -1 : 1}) scale(1.03);
    }
  `;
};

export const slider = css`
  max-width: 1100px;
  margin: 72px auto 0;
`;

// #SLIDE

export const slide = css`
  padding: 40px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.12);
`;
export const slideText = css`
  font-size: 24px;
  line-height: 1.5;
`;
export const slideFooter = css`
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const slideThumb = css`
  flex-shrink: 0;
  owerflow: hidden;
  border-radius: 50%;
`;
export const slideAvatar = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const slideUserInfo = css`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  font-size: 14px;
  color: ${COLORS.OXFORD_BLUE};
`;
export const slideUserName = css`
  ${OPEN_SANS_BOLD};
  font-size: 16px;
  color: ${COLORS.OXFORD_BLUE};
`;
