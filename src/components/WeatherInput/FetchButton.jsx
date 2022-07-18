import { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/WeatherDataContext';
import Button from '../Inputs/Button';

const FetchButton = () => {
  const { fetchWeather, setWeather, setupChart } =
    useContext(WeatherDataContext);

  // working on getting position to server
  const coords = {
    lat: 47.65,
    lon: -52.73,
  };

  const optionsPOST = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coords),
  };

  const sendCoords = async () => {
    const response = await fetch('/api', options);
    const position = await response.json();
    console.log(position);
  };

  const handleClick2 = () => {
    sendCoords().catch((err) => console.log(err));
  };

  // end of new

  const handleClick = () => {
    // setWeather();
    // setupChart();
    fetchWeather().catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={handleClick2}>Send Position</Button>
      <Button onClick={handleClick}>Get Weather Info</Button>
    </div>
  );
};

export default FetchButton;
