const fbData = {
  data: {
    labels: ['Testing 1', 'Testing 2', 'Testing 3', 'Testing 4'],
    datasets: [
      {
        label: 'No of Moons',
        data: [1, 2, 3, 4],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 3
      },
      {
        label: 'Planet Mass',
        data: [4, 3, 2, 1],
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    title: {
      display: true,
      text: 'Planets',
      fontSize: 40,
      fontColor: 'white'
    }
  }
}

export default fbData
