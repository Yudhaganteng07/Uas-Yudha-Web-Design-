$(document).ready(function(){
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    function showDetail(rumahId) {
        const detailRumah = getDetailRumah(rumahId);

        $('#luasTanah-' + rumahId.slice(-1)).text(detailRumah.luasTanah);

        const fasilitasList = detailRumah.fasilitas.map(fasilitas => `<li>${fasilitas}</li>`).join('');
        $('#fasilitas-' + rumahId.slice(-1)).html(fasilitasList);
    }

    function getDetailRumah(rumahId) {
        const rumahData = {
            'rumah-1': {
                nama: 'Rumah Modern di Kota',
                harga: 'Rp 1.500.000.000',
                deskripsi: 'Rumah dengan desain modern dan fasilitas lengkap.',
                luasTanah: '200 m²',
                jumlahKamar: '3',
                jumlahKamarMandi: '2',
                fasilitas: ['garasi', 'taman', 'kolam renang']
            },
            'rumah-2': {
                nama: 'Rumah di Pinggiran Kota',
                harga: 'Rp 900.000.000',
                deskripsi: 'Rumah nyaman dengan lingkungan yang tenang.',
                luasTanah: '150 m²',
                jumlahKamar: '2',
                jumlahKamarMandi: '1',
                fasilitas: ['halaman belakang', 'ruang keluarga']
            },
            'rumah-3': {
                nama: 'Rumah Mewah di Pusat Kota',
                harga: 'Rp 3.000.000.000',
                deskripsi: 'Rumah mewah dengan lokasi strategis dan fasilitas premium.',
                luasTanah: '300 m²',
                jumlahKamar: '4',
                jumlahKamarMandi: '3',
                fasilitas: ['kolam renang pribadi', 'sauna', 'ruang gym']
            },
            'rumah-4': {
                nama: 'Rumah Minimalis di Suburban',
                harga: 'Rp 1.200.000.000',
                deskripsi: 'Rumah minimalis dengan lingkungan hijau.',
                luasTanah: '180 m²',
                jumlahKamar: '3',
                jumlahKamarMandi: '2',
                fasilitas: ['garasi', 'teras', 'keamanan 24 jam']
            },
            'rumah-5': {
                nama: 'Rumah Tradisional',
                harga: 'Rp 800.000.000',
                deskripsi: 'Rumah dengan gaya tradisional dan halaman luas.',
                luasTanah: '250 m²',
                jumlahKamar: '2',
                jumlahKamarMandi: '1',
                fasilitas: ['taman belakang', 'pendopo', 'kolam ikan']
            },
            'rumah-6': {
                nama: 'Apartemen di Pusat Kota',
                harga: 'Rp 2.500.000.000',
                deskripsi: 'Apartemen mewah dengan fasilitas lengkap.',
                luasTanah: 'N/A',
                jumlahKamar: '3',
                jumlahKamarMandi: '2',
                fasilitas: ['kolam renang umum', 'pusat kebugaran', 'lounge']
                
            }
        };

        return rumahData[rumahId];
    }
});