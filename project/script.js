// Chart configuration
$(document).ready(function() {
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Michael Jordan', 'LeBron James'], // Players as bars
    datasets: achievements.map((achievement, index) => ({
      label: achievement,
      data: [jordanData[index], lebronData[index]], // Data for each player
      backgroundColor: `hsl(${index * 60}, 70%, 50%)`, // Different colors for each category
      borderColor: `hsl(${index * 60}, 70%, 30%)`,
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
});