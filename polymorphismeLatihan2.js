class Employee {
    constructor (){
        this.baseSalary = 5000000;
        this.basePartTimeSalary = 50000;
    }
    calculateSalary() {}
}

class FullTimeEmployee extends Employee {
    calculateSalary(){
        return console.log(`Gaji Karyawan Fulltime adalah RP ${this.baseSalary}`);
    }
}
class PartTimeEmployee extends Employee {
    calculateSalary(workHours) {
        this.baseSalary = this.basePartTimeSalary * workHours;
        return console.log(`Gaji Karyawan Parttime adalah Rp.${this.baseSalary}`);
    }
}

const fullTimeEmployee = new FullTimeEmployee();
const partTimeEmployee = new PartTimeEmployee();

fullTimeEmployee.calculateSalary()
partTimeEmployee.calculateSalary(5)