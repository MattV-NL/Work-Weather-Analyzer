import './charts.scss';
import './c3.min.css';
import c3 from 'c3';
import { useEffect, useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Chart from './Chart';

const WeatherChart = () => {
  const { weatherValues } = useContext(WeatherDataContext);

  useEffect(() => {
    c3.generate({
      bindto: '#weather-chart',
      data: {
        json: Array.from(weatherValues.values()),
        keys: {
          x: 'date',
          value: ['precip', 'wind'],
        },
        colors: {
          precip: '#4444d4',
          wind: '#0000f4',
        },
        names: {
          precip: 'Precipitation',
          wind: 'Wind Speed',
        },
        types: {
          precip: 'bar',
          wind: 'spline',
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            rotate: -45,
            format: '%Y-%m-%d',
          },
        },
      },
    });
  }, [weatherValues]);

  return <Chart id={'weather-chart'} className={'weather-chart'} />;
};

export default WeatherChart;
