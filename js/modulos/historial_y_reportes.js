document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de Cosecha
    const cosechaCtx = document.getElementById('cosechaChart').getContext('2d');
    new Chart(cosechaCtx, {
        type: 'bar',
        data: {
            labels: ['Lote A', 'Lote B', 'Lote C', 'Lote D'],
            datasets: [{
                label: 'Producción (kg)',
                data: [1200, 1900, 900, 1500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Exportaciones
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['Estados Unidos', 'Alemania', 'Japón', 'Canadá'],
            datasets: [{
                label: 'Exportaciones (Toneladas)',
                data: [300, 150, 100, 200],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});
