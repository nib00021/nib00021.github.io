
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("historyChart").getContext("2d");

  const mockData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
    datasets: [
      {
        label: "Sleep",
        data: [6, 7, 8, 7.5],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        fill: true,
        tension: 0.3
      },
      {
        label: "Fitness",
        data: [30, 45, 60, 50],
        borderColor: "#2ecc71",
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        fill: true,
        tension: 0.3
      },
      {
        label: "Goals",
        data: [5, 6, 7, 6],
        borderColor: "#f1c40f",
        backgroundColor: "rgba(241, 196, 15, 0.2)",
        fill: true,
        tension: 0.3
      },
      {
        label: "Mood",
        data: [7, 8, 9, 8],
        borderColor: "#e67e22",
        backgroundColor: "rgba(230, 126, 34, 0.2)",
        fill: true,
        tension: 0.3
      }
    ]
  };

  const historyChart = new Chart(ctx, {
    type: "line",
    data: mockData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
});
