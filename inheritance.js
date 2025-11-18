class person{
    constructor(name){
        this.name = name;
    }

    introduceSelf(){
        console.log(`Hi I'm${this.name}`);
    }
}
class Professor extends Person {
    teaches;

    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }

    introduceSelf(){
        console.log(
            `my name is ${this.name}, and i will be your ${this.teaches} professor`
        )
    }
}