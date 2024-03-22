import { css } from '@emotion/css';

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
