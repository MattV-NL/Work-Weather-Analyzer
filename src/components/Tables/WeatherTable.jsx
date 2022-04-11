import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import WeatherInput from '../Inputs/WeatherInput';
import './tables.scss';
import WeatherTableHeader from './WeatherTableHeader';

const RainfallTable = () => {

  const {weatherValues} = useContext(DataContext);

  return (
    <>
      <WeatherTableHeader />
        <div className="weather-table">
          <table className='table'>
            <tbody>
              {weatherValues.map(({ date, precip, wind }) => (
                  <tr key = {`${date}-${precip}`}>
                    <td>{date}</td>
                    <td>{precip}</td>
                    <td>{wind}</td>
                  </tr>
                  ))}            
            </tbody>
          </table>
        </div>
      <WeatherInput />
    </>
  );
}

export default RainfallTable
