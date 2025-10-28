class FruitBasket {
    constructor() {
        this.fruitsBasket = [];
    }

    addItem(fruit) {
        // menambahkan buah ke dalam keranjang
        this.fruitsBasket.push(fruit);
        return `${fruit} telah ditambahkan ke dalam keranjang.`;
    }

    removeLastItem() {
        // menghapus buah terakhir yang dimasukkan ke dalam keranjang
        const removed = this.fruitsBasket.pop();
        if (removed) {
            return `${removed} telah dihapus dari keranjang.`;
        } else {
            return 'Keranjang kosong, tidak ada yang dihapus.';
        }
    }

    getInformation() {
        // mendapatkan list buah dalam keranjang
        if (this.fruitsBasket.length === 0) {
            return 'Keranjang masih kosong.';
        }
        return `Buah dalam keranjang: ${this.fruitsBasket.join(', ')}.`;
    }
}

const myBasket = new FruitBasket();

console.log(myBasket.addItem('Apel'));
console.log(myBasket.addItem('Pisang'));
console.log(myBasket.getInformation());
console.log(myBasket.removeLastItem());
console.log(myBasket.getInformation());
