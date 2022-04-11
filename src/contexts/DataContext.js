import { createContext, useState } from 'react';
import { DateTime } from 'luxon';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const date = DateTime.local(); 

  const [weatherValues, setWeatherValues] = useState(
    Array(7).fill(date).map((date, index) => {
      var nextDate = date.plus({ days: index })
      return nextDate;
    }).map((date) => ({date: date.toFormat('yyyy-MM-dd'), precip: 0, wind: 0}))
  );

  const submitWeatherValues = (date, precip, wind) => {
    setWeatherValues([...weatherValues, {date, precip, wind}]
      );
  }

  return (
    <DataContext.Provider value={{ weatherValues, submitWeatherValues }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
