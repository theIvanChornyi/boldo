import { css } from '@emotion/css';

import bg from '../../assets/backgrounds/support.png';
import bgRetina from '../../assets/backgrounds/support@2x.png';
import { COLORS } from '../../shared/const/colors.const';
import { retinaRule } from '../../shared/styles/retina-media.styles';
import { tabletMedia } from '../../shared/styles/screen-breackpoint-media.styles';

export const section = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  padding: 567px 150px 124px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: clamp(320px, 78.8%, 1100px) auto;
  background-position: top 124px center;
  ${tabletMedia`
    padding: 400px 30px 30px;
  `}

  ${retinaRule`
    background-image: url(${bgRetina});
`}
`;

export const title = css`
  max-width: 500px;
`;

export const accordion = css`
  max-width: 500px;
  overflow: hidden;
`;
export const accordionInput = css`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked ~ div {
    max-height: 200px;
  }

  &:checked ~ label div {
    transform: scaleY(-1);
  }
`;
export const accordionLabel = css`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px 0;
  font-size: 20px;
  border-bottom: 1px solid ${COLORS.SILVER_SAND};
  cursor: pointer;
`;
export const accordionLabelBullet = css`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${COLORS.OXFORD_BLUE};
  transition: transform 200ms linear;
  transition-behavior: revert;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 7px;
    left: 7.2px;
    height: 2px;
    width: 10px;

    border-radius: 4px;
    background: ${COLORS.WHITE};
  }

  &:before {
    transform: rotate(45deg) translateX(-4.5px);
  }

  &:after {
    transform: rotate(-45deg) translateX(4.5px);
  }
`;

export const accordionContent = css`
  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms linear;
`;

export const accordionDescription = css`
  padding: 16px 0;
`;
