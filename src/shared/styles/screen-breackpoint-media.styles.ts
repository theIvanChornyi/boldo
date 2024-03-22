import { css } from '@emotion/css';

export const mobile = (template: TemplateStringsArray): string => {
  return css`
    @media only screen and (min-width: 575px) {
      ${template};
    }
  `;
};

export const tablet = (template: TemplateStringsArray): string => {
  return css`
    @media only screen and (min-width: 767px) {
      ${template};
    }
  `;
};

export const desktop = (template: TemplateStringsArray): string => {
  return css`
    @media only screen and (min-width: 1370px) {
      ${template};
    }
  `;
};
