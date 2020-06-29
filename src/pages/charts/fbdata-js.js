export const fbData = {
  data: {
    labels: ['Gov.sg', 'Lianhe Zaobao 联合早报', 'Young NTUC', 'AOX Singapore', 'Millennials of Singapore', 'AsiaOne'],
    datasets: [{
      label: 'FB data',
      data: [0, 0, 1, 2, 67, 27],
      backgroundColor: 'red'
    },
    {
      label: 'smtg',
      data: [4, 7, 9, 5, 58, 30],
      backgroundColor: 'blue'
    }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    title: {
      display: true,
      text: 'FB data',
      fontSize: 40,
      fontColor: 'white'
    }
  }
}
