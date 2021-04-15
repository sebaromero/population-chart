import { HorizontalBar } from '@reactchartjs/react-chart.js'

export const BarChart = ({ items }) => {
  const dynamicLabels = items.map((country) => {
    return country.name;
  });

  const dynamicData = items.map((country) => {
    return country.population;
  });

  const data = {
    labels: dynamicLabels,
    datasets: [
      {
        label: "Population",
        data: dynamicData,
        backgroundColor: 'rgba(233, 30, 99, 0.8)',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <HorizontalBar data={data} options={options} height={400} weight={400} />
  )
}

