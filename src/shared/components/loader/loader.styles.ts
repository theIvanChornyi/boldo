import { css, keyframes } from '@emotion/css';
import { COLORS } from '../../const/colors.const';

const load = keyframes`
  100% {background-position: right}
`;

export const loader = css`
  width: 100%;
  height: 14px;
  background: repeating-linear-gradient(
      90deg,
      ${COLORS.MEDIUM_AQUAMARINE} 0 calc(25% - 5px),
      #0000 0 25%
    )
    left/calc(4 * 100%/3) 100%;

  animation: ${load} 0.5s infinite linear;
`;

// /* HTML: <div class="loader"></div> */
// .loader {
//   width: 90px;
//   height: 14px;
//   background: repeating-linear-gradient(90deg,#000 0 calc(25% - 5px),#0000 0 25%) left/calc(4*100%/3) 100%;
//   animation: l1 0.5s infinite linear;
// }
// @keyframes l1 {
//     100% {background-position: right}
// }
