document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inventory-form');
    const tableBody = document.getElementById('inventory-table');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('item-name').value;
        const quantity = document.getElementById('item-quantity').value;
        const unit = document.getElementById('item-unit').value;

        if (name && quantity) {
            const rowCount = tableBody.rows.length;
            const newRow = tableBody.insertRow();

            newRow.innerHTML = `
                <th scope="row">${rowCount + 1}</th>
                <td>${name}</td>
                <td>${quantity}</td>
                <td>${unit}</td>
                <td>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
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
