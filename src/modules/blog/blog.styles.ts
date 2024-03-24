import { css, CSSObject } from '@emotion/css';
import { COLORS } from '../../shared/const/colors.const';
import { tabletMedia } from '../../shared/styles/screen-breackpoint-media.styles';

export const section = css`
  padding: 34px 201px;
  text-align: center;

  ${tabletMedia`
    padding: 20px 30px 20px;
  `}
`;

export const list = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  justify-items: center;
  gap: 50px;
  margin: 79px auto 0;
`;

export const item = css`
  text-align: left;
  display: flex;
  height: 100%;
  gap: 20px;
  flex-direction: column;
`;

export const picture = css`
  border-radius: 12px;
`;
export const content = css`
  margin-top: 24px;
`;

export const userInfo = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const itemTitle = css`
  font-weight: 700;
  text-transform: capitalize;
  color: ${COLORS.OXFORD_BLUE};
`;
export const itemData = css`
  color: ${COLORS.SONIK_SILVER};
`;

export const itemText = css`
  margin-top: 12px;
  font-size: 20px;
  color: ${COLORS.BLACK};
  text-overflow: ellipsis ellipsis;
`;

export const footer = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;
export const avatar = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const buttonWrapper = css`
  margin-top: 84px;
`;

export interface ITextStyleProps {
  duration: number;
  styles?: CSSObject;
}

export const enterActive = css`
  filter: blur(5px);
`;
export const exitDone = css`
  filter: blur(0);
`;

export const enterDone = ({ duration }: ITextStyleProps): string => {
  return css`
    filter: blur(0)
    transition: all ${duration}ms;
  `;
};

export const exitActive = ({ duration }: ITextStyleProps): string => {
  return css`
    filter: blur(5px)
    transition: all ${duration}ms;
  `;
};

export const defaultclassNames = {
  enterActive: enterActive,
  enterDone: enterDone({
    duration: 200,
  }),
  exitActive: exitActive({
    duration: 200,
  }),
  exitDone: exitDone,
};
