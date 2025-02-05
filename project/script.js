// Chart configuration
$(document).ready(function() {
  const achievements = [
    'NBA Championships', 
    'MVP Awards', 
    'Finals MVP Awards', 
    'All-Star Selections', 
    'Scoring Titles', 
    'All-NBA Team Selections'
  ];
  
  const jordanData = [6, 5, 6, 14, 10, 11]; // Michael Jordan's achievements
  const lebronData = [4, 4, 4, 19, 1, 19];  // LeBron James' achievements

  const jordanColors = [
    'rgba(255, 0, 0, 0.8)',  // Red with opacity
    'rgba(255, 0, 0, 0.6)',  // Red with more opacity
    'rgba(255, 0, 0, 0.4)',  // Red with even more opacity
    'rgba(0, 0, 0, 0.8)',    // Black with opacity
    'rgba(0, 0, 0, 0.6)',    // Black with more opacity
    'rgba(0, 0, 0, 0.4)'     // Black with even more opacity
  ];

  const lebronColors = [
    'rgba(128, 0, 128, 0.8)',  // Purple with opacity
    'rgba(128, 0, 128, 0.6)',  // Purple with more opacity
    'rgba(128, 0, 128, 0.4)',  // Purple with even more opacity
    'rgba(255, 215, 0, 0.8)',  // Gold with opacity
    'rgba(255, 215, 0, 0.6)',  // Gold with more opacity
    'rgba(255, 215, 0, 0.4)'   // Gold with even more opacity
  ];

  const ctx = document.getElementById('achievementChart').getContext('2d');
  const achievementChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Michael Jordan', 'LeBron James'], // Players as bars
      datasets: achievements.map((achievement, index) => ({
        label: achievement,
        data: [jordanData[index], lebronData[index]], // Data for each player
        backgroundColor: [jordanColors[index], lebronColors[index]], // Different colors for each category
        borderColor: [jordanColors[index], lebronColors[index]], // Match border color to background color
        borderWidth: 1
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true, // Stack bars on the x-axis
        },
        y: {
          stacked: true, // Stack bars on the y-axis
          beginAtZero: true,
          ticks: {
            stepSize: 5 // Ensure the scale increments to 5
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Achievement Comparison: Jordan vs. LeBron',
          position: 'bottom', // Move title to the bottom
          font: {
            size: 20 // Reset the font size for the chart title
          },
          className: 'chart-title' // Add class for custom styling
        },
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 10 // Reset the font size for the legend labels
            },
            className: 'chart-legend' // Add class for custom styling
          }
        }
      }
    }
  });

  // Data for the bar chart
  const playoffStats = {
    labels: ['Points', 'Rebounds', 'Assists', 'Steals', 'Blocks'], // Categories
    datasets: [
      {
        label: 'LeBron James', // LeBron's dataset
        data: [28.7, 9.0, 7.2, 1.7, 0.9], // LeBron's stats
        backgroundColor: 'rgba(128, 0, 128, 0.8)', // Purple color
        borderColor: 'rgba(128, 0, 128, 1)', // Border color
        borderWidth: 1,
      },
      {
        label: 'Michael Jordan', // Jordan's dataset
        data: [33.4, 6.4, 5.7, 2.1, 0.9], // Jordan's stats
        backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red color
        borderColor: 'rgba(255, 0, 0, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  // Configuration for the bar chart
  const chartConfig = {
    type: 'bar',
    data: playoffStats,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Categories', // X-axis label
          },
          barThickness: 20 // Adjust the bar thickness as needed
        },
        y: {
          title: {
            display: true,
            text: 'Averages', // Y-axis label
          },
          beginAtZero: true, // Start Y-axis at 0
          max: 35, // Set the maximum value for the Y-axis
          ticks: {
            stepSize: 5 // Set the scale increments to 5
          }
        },
      },
      plugins: {
        legend: {
          position: 'top', // Legend position
          labels: {
            font: {
              size: 10 // Reset the font size for the legend labels
            },
            className: 'chart-legend' // Add class for custom styling
          }
        },
        title: {
          display: true,
          text: 'LeBron James vs Michael Jordan Playoff Averages', // Chart title
          font: {
            size: 20 // Reset the font size for the chart title
          },
          className: 'chart-title' // Add class for custom styling
        },
      },
    },
  };

  // Render the chart
  const barChart = new Chart(document.getElementById('barChart'), chartConfig);

  // Data for the scatter plot
  const lebronDatascatter = [
    {x: 31.5, y: 55.4}, // 2006
    {x: 32.4, y: 56.4}, // 2008
    {x: 33.8, y: 59.1}, // 2009
    {x: 34.9, y: 60.4}, // 2010
    {x: 33.1, y: 59.4}, // 2012
    {x: 34.4, y: 64.0}, // 2013
    {x: 33.3, y: 61.9}, // 2016
    {x: 32.3, y: 62.1}  // 2018
  ];

  const jordanDatascatter = [
    {x: 35.2, y: 56.2}, // 1987
    {x: 33.7, y: 60.3}, // 1988
    {x: 32.1, y: 61.4}, // 1989
    {x: 34.0, y: 60.6}, // 1990
    {x: 35.1, y: 60.5}, // 1991
    {x: 34.0, y: 57.9}, // 1992
    {x: 36.0, y: 56.4}, // 1993
    {x: 37.8, y: 58.2}  // 1988 (playoffs)
  ];

  const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
  new Chart(efficiencyCtx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'LeBron James',
        data: lebronDatascatter,
        backgroundColor: 'rgba(128, 0, 128, 0.8)', // Purple color
        borderColor: 'rgba(128, 0, 128, 1)', // Border color
        pointRadius: 6
      },
      {
        label: 'Michael Jordan',
        data: jordanDatascatter,
        backgroundColor: 'rgba(255, 0, 0, 0.8)', // Red color
        borderColor: 'rgba(255, 0, 0, 1)', // Border color
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Usage Percentage (%)'
          },
          min: 25,
          max: 40
        },
        y: {
          title: {
            display: true,
            text: 'True Shooting Percentage (%)'
          },
          min: 50,
          max: 65
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'LeBron vs Jordan Efficiency During Prime Years (Usage% vs TS%)',
          font: {
            size: 20 // Reset the font size for the chart title
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 10 // Reset the font size for the legend labels
            },
            className: 'chart-legend' // Add class for custom styling
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              // Customize the tooltip label with reduced spacing
              return `${context.dataset.label}: Usage%: ${context.parsed.x}%, TS%: ${context.parsed.y}%`;
            }
          }
        }
      }
    }
  });

  const careerFTCtx = document.getElementById('careerFTChart').getContext('2d');
  new Chart(careerFTCtx, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (83.5%)', 'LeBron James (73.5%)'],
      datasets: [{
        data: [83.5, 73.5],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });

  const career3ptCtxDuplicate = document.getElementById('career3ptChart').getContext('2d');
  new Chart(career3ptCtxDuplicate, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (32.7%)', 'LeBron James (50.6%)'],
      datasets: [{
        data: [32.7, 50.6],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });

  // Add configuration for the new career FG chart
  const careerFGCtx = document.getElementById('careerFGChart').getContext('2d');
  new Chart(careerFGCtx, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (49.7%)', 'LeBron James (50.4%)'],
      datasets: [{
        data: [49.7, 50.4],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });

  const postseasonFTCtx = document.getElementById('postseasonFTChart').getContext('2d');
  new Chart(postseasonFTCtx, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (82.8%)', 'LeBron James (74.0%)'],
      datasets: [{
        data: [82.8, 74.0],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });

  // Add configuration for the new postseason FG chart
  const postseasonFGCtx = document.getElementById('postseasonFGChart').getContext('2d');
  new Chart(postseasonFGCtx, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (48.7%)', 'LeBron James (49.5%)'],
      datasets: [{
        data: [48.7, 49.5],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });

  const postseason3ptCtx = document.getElementById('postseason3ptChart').getContext('2d');
  new Chart(postseason3ptCtx, {
    type: 'pie',
    data: {
      labels: ['Michael Jordan (33.2%)', 'LeBron James (33.2%)'],
      datasets: [{
        data: [33.2, 33.2],
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'], // Red and Purple
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Remove legend
        title: { display: true } // Remove title
      }
    }
  });
});
