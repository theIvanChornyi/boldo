import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { COLORS } from '../../const/colors.const';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  data?: Array<number>;
}

const Chart: React.FC<IProps> = ({ data = [35, 30, 35] }) => {
  const chartData = {
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

  const options = {
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

  return (
    <Doughnut updateMode="active" options={options as any} data={chartData} />
  );
};

export default Chart;
