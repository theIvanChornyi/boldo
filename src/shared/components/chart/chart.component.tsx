import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { COLORS } from '../../const/colors.const';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: React.FC = () => {
  const data = {
    labels: ['A/B testing ', 'Agile Development', 'Investor bandwidth'],

    styling: { borderWidth: 30 },
    datasets: [
      {
        options: {
          responsive: true,
        },
        data: [35, 25, 35],
        backgroundColor: [
          COLORS.OXFORD_BLUE,
          COLORS.SPIRO_DISCO_BALL,
          COLORS.MEDIUM_AQUAMARINE,
        ],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default Chart;
