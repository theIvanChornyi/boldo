import { css } from '@emotion/css';
import { COLORS } from './shared/const/colors.const';

export const heroSection = css`
  margin: 0 auto;
  padding-bottom: 56px;
  position: relative;
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

export const feedbackSection = css`
  background-color: ${COLORS.OXFORD_BLUE};
`;
