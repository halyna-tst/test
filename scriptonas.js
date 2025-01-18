  // Диаграмма №1
  new Chart(
    document.getElementById('evementsChartOne').getContext('2d'),
    {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Кол-во проектов',
            data: [12, 19, 10, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
    
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        },
        legend: {
            display: true,
            position: 'top'
        }
    }
}
  );

  // Диаграмма №2
  new Chart(document.getElementById('evementsChartTwo').getContext('2d'),
   {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30, 10]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Конкуренты',
            'Продажи',
            'Спрос',
            'Доход'
        ]
    }
});


// Диаграмма №3
new Chart(document.getElementById('evementsChartThree').getContext('2d'),
   {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
        datasets: [{
            label: 'Выполнено проектов за 2023 год по месяцам',
            data: [2, 3, 1, 3, 4, 2, 1, 3, 2, 2, 1, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
        
    
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true },
            x: { beginAtZero: true }
        },
        legend: {
            display: true,
            position: 'top'
        }
    }
}
);