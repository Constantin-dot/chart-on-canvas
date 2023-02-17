import { getChartData } from './data';
import { chart } from './chart';
import './styles.scss';

const Chart = chart(document.getElementById('chart'), getChartData());
Chart.init();