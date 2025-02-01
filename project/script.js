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

  const achievementColors = [
    'rgb(255, 99, 132)',  // NBA Championships
    'rgb(54, 162, 235)',  // MVP Awards
    'rgb(255, 206, 86)',  // Finals MVP Awards
    'rgb(75, 192, 192)',  // All-Star Selections
    'rgb(153, 102, 255)', // Scoring Titles
    'rgb(255, 159, 64)'   // All-NBA Team Selections
  ];

  const ctx = document.getElementById('achievementChart').getContext('2d');
  const achievementChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Michael Jordan', 'LeBron James'], // Players as bars
      datasets: achievements.map((achievement, index) => ({
        label: achievement,
        data: [jordanData[index], lebronData[index]], // Data for each player
        backgroundColor: achievementColors[index], // Different colors for each category
        borderColor: achievementColors[index], // Match border color to background color
        borderWidth: 1
      }))
    },
    options: {
      scales: {
        x: {
          stacked: true, // Stack bars on the x-axis
        },
        y: {
          stacked: true, // Stack bars on the y-axis
          beginAtZero: true
        }
      },
      
      plugins: {
        title: {
          display: true,
          text: 'Achievement Comparison: Jordan vs. LeBron',
          position: 'bottom', // Move title to the bottom
          font: {
            size: 24 // Ensure the font size for the chart title is consistent
          },
          className: 'chart-title' // Add class for custom styling
        },
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 12 // Ensure the font size for the legend labels is consistent
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
      backgroundColor: 'rgba(0, 119, 204, 0.8)', // Blue color
      borderColor: 'rgba(0, 119, 204, 1)', // Border color
      borderWidth: 1,
    },
    {
      label: 'Michael Jordan', // Jordan's dataset
      data: [33.4, 6.4, 5.7, 2.1, 0.9], // Jordan's stats
      backgroundColor: 'rgba(255, 99, 132, 0.8)', // Red color
      borderColor: 'rgba(255, 99, 132, 1)', // Border color
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
        max: 35 // Set the maximum value for the Y-axis
      },
    },
    plugins: {
      legend: {
        position: 'top', // Legend position
        labels: {
          font: {
            size: 12 // Ensure the font size for the legend labels is consistent
          },
          className: 'chart-legend' // Add class for custom styling
        }
      },
      title: {
        display: true,
        text: 'LeBron James vs Michael Jordan Playoff Averages', // Chart title
        font: {
          size: 24 // Ensure the font size for the chart title is consistent
        },
        className: 'chart-title' // Add class for custom styling
      },
    },
  },
};

// Render the chart
const barChart = new Chart(document.getElementById('barChart'), chartConfig);
});
