document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lote-form');
    const tableBody = document.getElementById('lotes-table');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const loteName = document.getElementById('lote-name').value;
        const variety = document.getElementById('variety').value;
        const status = document.getElementById('lote-status').value;
        const farm = document.getElementById('farm-origin').value;

        if (loteName && variety && status && farm) {
            const newRow = tableBody.insertRow();

            newRow.innerHTML = `
                <td>${loteName}</td>
                <td>${variety}</td>
                <td>${status}</td>
                <td>${farm}</td>
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
