import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import { weatherHeader } from '../../constants';
import './tables.scss';
import { Link } from 'react-router-dom';

const WeatherTable = () => {
  const { weatherValues } = useContext(WeatherDataContext);
  const weatherTableMap = new Map(weatherValues);

  const weatherValuesKeys = weatherTableMap.keys();
  return (
    <div className='weather-table'>
      <div className='weather-table-header-row'>
        {[...weatherHeader.values()].map(({ title, id }) => (
          <div key={id} className='header-item'>
            {title}
          </div>
        ))}
      </div>
      <div className='weather-table-body'>
        {Array.from(weatherTableMap.values()).map(({ dt, pop, wind_speed }) => {
          let date = new Date(dt * 1000).toDateString();
          let precip = pop * 100;
          let windSpeed = wind_speed * 3.6;

          return (
            <Link
              className='weather-table-link'
              to={`/weather-details/${weatherValuesKeys.next().value}`}
              key={date}
            >
              <div className='weather-row' key={`${date}-${precip}`}>
                <div className='weather-cells'>{date}</div>
                <div className='weather-cells'>
                  {parseFloat(precip.toFixed(2))}
                </div>
                <div className='weather-cells'>
                  {parseFloat(windSpeed.toFixed(2))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherTable;
