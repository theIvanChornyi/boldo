import { COLORS } from '../../const/colors.const';

export const options = {
  cutout: 71,
  rotation: 220,
  borderWidth: 0,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 16,
        color: COLORS.BLACK,
        font: 'Manrope',
        pointStyle: 'circle',
        usePointStyle: true,
        boxWidth: 5,
        boxHeight: 5,
      },
    },
  },
};
