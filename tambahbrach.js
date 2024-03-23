console.log('ini untuk mencoba menambah branch dan merge');

const multiplyNumber = (a, b) => a * b;
console.log(multiplyNumber(4,4));

const divideNumber = (a, b) => a / b;
console.log(divideNumber(4,4));

// revisi commit
// -- checkout : sifatnya untuk sementara, melihat perubahan apa saja yang terjadi dalam code 
// -- reset  :  akan mengembalikan code ke posisi commit yang hendak dikembalikan dengan menghapus beberapa commit setelah commint yang dituju
// -- revert :  mengembalikan code ke posisi commit yang hendak dikembalikan tanpa menghapus beberapa commit setelah commint yang dituju (rekom)
// ----------- menambahkan git push