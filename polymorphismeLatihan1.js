class Vehicle{
    move(){
        return console.log("Kendaraan Bergerak");
    }
}

class Car extends Vehicle{
    move(){
        return console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle{
    move(){
        return console.log("Kapal berlayar di laut");
    }
}

const car = new Car();
const boat = new Boat();
car.move(); 
boat.move();