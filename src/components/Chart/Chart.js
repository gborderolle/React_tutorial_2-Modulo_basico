import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // me guardo en un array de valores
  const totalMaxium = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // si la lista no tiene key único para cada item, usar index: .map((item, index)=>(... key={index}))
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
