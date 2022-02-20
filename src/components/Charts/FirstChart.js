import './FirstChart.css';
import c3 from 'c3';


const chart = c3.generate({

  bindto: '#chart',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    axes: {
      data2: 'y2'
    },
    types: {
      data2: 'bar'
    }
  },
  axis: {
    y: {
      label: {
        text: 'Y Label',
        position: 'outer-middle'
      }
    },
    y2: {
      show: true,
      label: {
        text: 'Y2 Label',
        position: 'outer-middle'
      }
    }
  }
});


const FirstChart = () => {
  
  return (
    <div id='chart'></div>
  )
}

export default FirstChart
