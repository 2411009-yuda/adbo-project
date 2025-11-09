// class utama : karyawan
class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

//   method menghitung bonus
  hitungBonus() {
    return 0;
  }
}

// class turunan : karyawan tetap
class KaryawanTetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10;
  }
}

// class turunan : karyawan kontrak
class KaryawanKontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05;
  }
}

const budi = new KaryawanTetap("Budi", 8000000);
const sita = new KaryawanKontrak("Sita", 6000000);
const daftarKaryawan = [budi, sita];

let totalBonus = 0;
daftarKaryawan.forEach(karyawan => {
  const bonus = karyawan.hitungBonus();
  console.log(`${karyawan.nama} mendapatkan bonus: Rp${bonus.toLocaleString()}`);
  totalBonus += bonus;
});

console.log(`\nTotal Bonus Semua Karyawan: Rp${totalBonus.toLocaleString()}`);
