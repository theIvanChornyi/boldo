import { css } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { OPEN_SANS_SEMI_BOLD } from '../../shared/const/fonts.const';

export const header = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const navigation = css`
  display: flex;
  column-gap: 40px;
`;

export const navigationLinksList = css`
  display: flex;
  column-gap: 40px;
`;

export const navigationLink = css`
  display: block;
  padding: 6px 0;

  ${OPEN_SANS_SEMI_BOLD}
  color: ${COLORS.WHITE};
  line-height: 1.75;
  text-decoration: none;
  transition: transform 200ms linear;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
