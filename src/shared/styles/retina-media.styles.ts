import { ArrayCSSInterpolation, css } from '@emotion/css';

export const retinaRule = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
      only screen and (min-resolution: 144dpi) {
      ${css(template, ...args)};
    }
  `;
};
