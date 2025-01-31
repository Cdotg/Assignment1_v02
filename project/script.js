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
          text: 'Achievement Comparison: Jordan vs. LeBron'
        },
        legend: {
          position: 'top'
        }
      }
    }
  });

  // Add new chart script here
});
