class Karyawan {
    constructor (nama, jabatan, gaji){ //parameter dari class
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    info() {
        return console.log(
            `${this.nama} bekerja sebagai ${this.jabatan} dengan gaji ${this.gaji}`
        );
    }
    
    infoGaji() {
        return console.log(
            `karyawan ${this.nama} mendapatkan gaji sebesar ${this.gaji} dengan jabatan ${this.jabatan}`
        );
    }
}

    


const karyawan = new Karyawan("Yuda", "Mahasiswa", 5000);
karyawan.info();
karyawan.infoGaji();