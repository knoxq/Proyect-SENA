function mostrarTabla(tabla) {
    document.getElementById('tabla-cultivos').classList.add('d-none');
    document.getElementById('tabla-actividad').classList.add('d-none');
    document.getElementById('tabla-lote').classList.add('d-none');

    document.getElementById('tabla-' + tabla).classList.remove('d-none');
}
