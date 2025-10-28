class storeItem {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    info(){
        return console.log(
            `return ${this.name} with price ${this.price}`
        );
    }
}

const barang = new storeItem("botol", 5000);
barang.info();