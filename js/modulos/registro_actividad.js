document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('activity-form');
    const tableBody = document.getElementById('activities-table');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const activityType = document.getElementById('activity-type').value;
        const activityDate = document.getElementById('activity-date').value;
        const responsible = document.getElementById('responsible').value;
        const lote = document.getElementById('lote-asociado').value;

        if (activityType && activityDate && responsible && lote) {
            const newRow = tableBody.insertRow();

            newRow.innerHTML = `
                <td>${activityType}</td>
                <td>${activityDate}</td>
                <td>${responsible}</td>
                <td>${lote}</td>
                <td><button class="btn btn-danger btn-sm">Eliminar</button></td>
            `;

            form.reset();
        }
    });

    tableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-danger')) {
            const row = e.target.closest('tr');
            row.remove();
        }
    });
});
