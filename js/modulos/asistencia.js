document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const requestsList = document.querySelector('.list-group');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const farm = document.getElementById('farm').value;
        const subject = document.getElementById('subject').value;
        const description = document.getElementById('description').value;

        if (subject && description && farm) {
            const newRequest = document.createElement('a');
            newRequest.href = '#';
            newRequest.className = 'list-group-item list-group-item-action';

            newRequest.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${subject}</h5>
                    <small>Ahora</small>
                </div>
                <p class="mb-1">${description}</p>
                <small>Estado: <span class="badge bg-warning text-dark">En proceso</span></small>
            `;

            requestsList.prepend(newRequest);
            form.reset();
        }
    });
});
