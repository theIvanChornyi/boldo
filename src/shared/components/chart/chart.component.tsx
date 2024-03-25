import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { options } from './chart.const';
import { generateChartData } from './chart.util';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  data?: Array<number>;
}

const Chart: React.FC<IProps> = ({ data = [35, 30, 35] }) => {
  const chartData = generateChartData(data);
  return (
    <Doughnut updateMode="active" options={options as any} data={chartData} />
  );
};

export default Chart;
