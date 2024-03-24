import { css, ArrayCSSInterpolation } from '@emotion/css';

export const mobileMedia = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (max-width: 575px) {
      ${css(template, ...args)};
    }
  `;
};

export const smalTabletMedia = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (max-width: 700px) {
      ${css(template, ...args)};
    }
  `;
};

export const tabletMedia = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (max-width: 790px) {
      ${css(template, ...args)};
    }
  `;
};

export const laptopMedia = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${css(template, ...args)};
    }
  `;
};

export const desktopMedia = (
  template: TemplateStringsArray,
  ...args: ArrayCSSInterpolation
): string => {
  return css`
    @media only screen and (min-width: 700px) {
      ${css(template, ...args)};
    }
  `;
};
