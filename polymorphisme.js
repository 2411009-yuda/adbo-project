// pakai polymorphisme karena sifatnya sama
class Animal {
    speak() {
        return console.log("Animal make a sound");
    }
}

class Dog extends Animal {
    speak() {
        return console.log("Dog sounds like barks");
    }
}

class Cat extends Animal {
    speak() {
        return console.log("Cat sounds like meows");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.speak(); 
cat.speak();