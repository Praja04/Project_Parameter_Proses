// fetchData.js
const base_urlcell1 = "<?= base_url('altline6/get/all/cell1') ?>";
const base_urlcell2 = "<?= base_url('altline6/get/all/cell2') ?>";
const base_urlcell3 = "<?= base_url('altline6/get/all/cell3') ?>";
// Fungsi untuk cell1
const fetchDataCell1 = () => {
    $.ajax({
        url: base_urlcell1,
        method: 'GET',
        dataType: 'json',
        success: (data) => {
            const time = data.data.map(item => item.waktu);
            const targets = ['07:30', '16:30', '00:30']; // Target waktu

            // Fungsi untuk mencari waktu paling dekat dengan target
            const findClosestTime = (data, target) => {
                let closest = null;
                let closestDiff = Infinity;

                data.forEach(item => {
                    const itemTime = item.waktu.split(' ')[1]; // Ambil bagian jam
                    const diff = Math.abs(
                        timeToMinutes(itemTime) - timeToMinutes(target)
                    );

                    if (diff < closestDiff) {
                        closest = item;
                        closestDiff = diff;
                    }
                });

                return closest;
            };

            // Mengubah waktu ke menit untuk perhitungan
            const timeToMinutes = (time) => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours * 60 + minutes;
            };

            // Ambil data dengan waktu terdekat untuk setiap target
            const filteredData = targets.map(target => findClosestTime(data.data, target));

            // Ambil label untuk sumbu x dari data yang difilter
            const filteredLabels = filteredData.map(item => item.waktu.split(' ')[1]); // Jam saja

            const labels = data.data.map(item => item.waktu);
            const valuesSet = data.data.map(item => parseFloat(item.L6_ALT1_ACTUAL_PRESSURE_CELL1));

            updateOrCreateChart('container', chart, 'Cell1', labels, valuesSet, 'L6_ALT1_ACTUAL_PRESSURE_CELL1', (newChart) => {
                chart = newChart;
            }, filteredLabels, data.data.map(item => item.waktu.split(' ')[1]));
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error('Error fetching data for Cell1:', textStatus, errorThrown);
        }
    });
};

// Fungsi untuk cell3
const fetchDataCell3 = () => {
    $.ajax({
        url: base_urlcell2,
        method: 'GET',
        dataType: 'json',
        success: (data) => {
            const time = data.data.map(item => item.waktu);
            const targets = ['07:30', '16:30', '00:30']; // Target waktu

            // Fungsi untuk mencari waktu paling dekat dengan target
            const findClosestTime = (data, target) => {
                let closest = null;
                let closestDiff = Infinity;

                data.forEach(item => {
                    const itemTime = item.waktu.split(' ')[1]; // Ambil bagian jam
                    const diff = Math.abs(
                        timeToMinutes(itemTime) - timeToMinutes(target)
                    );

                    if (diff < closestDiff) {
                        closest = item;
                        closestDiff = diff;
                    }
                });

                return closest;
            };

            // Mengubah waktu ke menit untuk perhitungan
            const timeToMinutes = (time) => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours * 60 + minutes;
            };

            // Ambil data dengan waktu terdekat untuk setiap target
            const filteredData = targets.map(target => findClosestTime(data.data, target));

            // Ambil label untuk sumbu x dari data yang difilter
            const filteredLabels = filteredData.map(item => item.waktu.split(' ')[1]); // Jam saja

            const labels = data.data.map(item => item.waktu);
            const valuesSet = data.data.map(item => parseFloat(item.L6_ALT1_ACTUAL_PRESSURE_CELL3));

            updateOrCreateChart('container2', chart3, 'Cell3', labels, valuesSet, 'L6_ALT1_ACTUAL_PRESSURE_CELL3', (newChart) => {
                chart3 = newChart;
            }, filteredLabels, data.data.map(item => item.waktu.split(' ')[1]));
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error('Error fetching data for Cell3:', textStatus, errorThrown);
        }
    });
};

// Fungsi untuk cell5
const fetchDataCell5 = () => {
    $.ajax({
        url: base_urlcell3,
        method: 'GET',
        dataType: 'json',
        success: (data) => {
            const time = data.data.map(item => item.waktu);
            const targets = ['07:30', '16:30', '00:30']; // Target waktu

            // Fungsi untuk mencari waktu paling dekat dengan target
            const findClosestTime = (data, target) => {
                let closest = null;
                let closestDiff = Infinity;

                data.forEach(item => {
                    const itemTime = item.waktu.split(' ')[1]; // Ambil bagian jam
                    const diff = Math.abs(
                        timeToMinutes(itemTime) - timeToMinutes(target)
                    );

                    if (diff < closestDiff) {
                        closest = item;
                        closestDiff = diff;
                    }
                });

                return closest;
            };

            // Mengubah waktu ke menit untuk perhitungan
            const timeToMinutes = (time) => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours * 60 + minutes;
            };

            // Ambil data dengan waktu terdekat untuk setiap target
            const filteredData = targets.map(target => findClosestTime(data.data, target));

            // Ambil label untuk sumbu x dari data yang difilter
            const filteredLabels = filteredData.map(item => item.waktu.split(' ')[1]); // Jam saja

            const labels = data.data.map(item => item.waktu);
            const valuesSet = data.data.map(item => parseFloat(item.L6_ALT1_ACTUAL_PRESSURE_CELL5));

            updateOrCreateChart('container3', chart5, 'Cell5', labels, valuesSet, 'L6_ALT1_ACTUAL_PRESSURE_CELL5', (newChart) => {
                chart5 = newChart;
            }, filteredLabels, data.data.map(item => item.waktu.split(' ')[1]));
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error('Error fetching data for Cell5:', textStatus, errorThrown);
        }
    });
};
