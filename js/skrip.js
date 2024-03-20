function dataPerson() {
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;

    //tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada HTML
    //1. isian nama
    //2. isian pekerjaan
    //3. isian hobby
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;
    let input = 'Selamat Pagi ' + nama + '<br>Kamu Adalah Seorang ' + pekerjaan + '<br>Hobi Kamu Adalah ' + hobi;
    let no_input = 'Harap Lengkapi Form Terlebih Dahulu';
    let hasil = (nama && pekerjaan && hobi != '') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}