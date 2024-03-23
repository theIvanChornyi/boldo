import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import {
  OPEN_SANS_BOLD,
  OPEN_SANS_REGULAR,
} from '../../shared/const/fonts.const';

export const section = css`
  padding: 82px 150px;
`;

export const servicesList = css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 20px;
  justify-content: center;

  margin-top: 80px;
`;

export const servicesItem = css`
  ${OPEN_SANS_REGULAR};
  max-width: 300px;
`;

export const itemName = css`
  display: inline-block;
  margin-top: 24px;

  color: ${COLORS.BLACK};
  font-size: 24px;
  line-height: 1.5;
`;

export const itemDescription = css`
  margin-top: 12px;
  color: ${COLORS.SONIK_SILVER};
  font-size: 20px;
  line-height: 1.6;
`;

export const itemLink = css`
  position: relative;
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  padding: 8px 0;
  ${OPEN_SANS_BOLD};
  color: ${COLORS.OXFORD_BLUE};
  font-size: 20px;
  line-height: 1.8;
  text-decoration: none;

  border-bottom: 1px solid ${COLORS.OXFORD_BLUE};
  overflow: hidden;

  &:before {
    content: '';
    background-color: ${COLORS.MEDIUM_AQUAMARINE};
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform 0.3s ease 0s;
    z-index: -1;
    transform: translateY(+100%);
  }

  &:hover:before {
    transform: translateY(0);
  }
`;
