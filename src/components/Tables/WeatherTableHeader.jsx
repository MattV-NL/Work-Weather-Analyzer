import './tables.scss';

const WeatherTableHeader = () => {
  return (
    <table className='table'>
      <tbody>
        <tr>
          <th>Day of the Week</th>
          <th>Rainfall Amount</th>
          <th>Wind Speed</th>
        </tr>
      </tbody>
    </table>
  )
}

export default WeatherTableHeader
