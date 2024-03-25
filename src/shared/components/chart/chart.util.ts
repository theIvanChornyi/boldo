import { COLORS } from '../../const/colors.const';

export const generateChartData = (data: Array<number>) => {
  return {
    labels: [
      `${data[0]}% - Agile Development`,
      `${data[1]}% - Investor bandwidth`,
      `${data[2]}% - A/B testing `,
    ],
    datasets: [
      {
        data,
        backgroundColor: [
          COLORS.SPIRO_DISCO_BALL,
          COLORS.MEDIUM_AQUAMARINE,
          COLORS.OXFORD_BLUE,
        ],
      },
    ],
  };
};
