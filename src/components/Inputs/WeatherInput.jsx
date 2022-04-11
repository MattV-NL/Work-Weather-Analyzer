import '../Tables/tables.scss';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const WeatherInput = () => {
  
  const { date, 
          precip, 
          wind, 
          submitDate, 
          submitPrecip, 
          submitWind
        } = useContext(InputContext);

  return (
    <table className='table'>
      <tbody>
        <tr>
          <td>
            <input 
              type="date" 
              value={date} 
              required 
              onChange={submitDate}
            />
          </td>
          <td>
            <input 
              type="number" 
              value={precip || ""} 
              placeholder='Precipitation' 
              required 
              onChange={submitPrecip} 
            />
          </td>
          <td>
            <input 
              type="number" 
              value={wind || ""} 
              placeholder='Wind Speed' 
              required 
              onChange={submitWind} 
            />
          </td>  
        </tr>
      </tbody>
    </table>
  )
}

export default WeatherInput
