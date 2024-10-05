const pembelianForm = document.getElementById('pembelian-form');
const totalOutput = document.getElementById('total-output');

pembelianForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const namaPembeli = document.getElementById('namaPembeli').value;

    const ikanData = {
        kkpPrem: {
            harga: 63000,
            jumlah: parseInt(document.getElementById('kkpPremJumlah').value),
        },
        tgr: {
            harga: 95000,
            jumlah: parseInt(document.getElementById('tgrJumlah').value),