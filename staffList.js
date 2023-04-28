class StaffList {
    //add your code here
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.memberCollection = [];
    }
    add(name, age) {
        if (age > 20) {
            this.memberCollection.push(name);
        } else if (age <= 20) {
            console.log('Staff member age must be greater than 20');
        }
    }
    remove(name) {
        if (this.memberCollection.includes(name)) {
            this.memberCollection.splice(this.memberCollection.indexOf(name), 1);
            console.log(true);
        } else {
            console.log(false);
        }
    }
    getSize = () => console.log(this.memberCollection.length);
    
}

const staff =  new StaffList();
console.log(staff.add('John',25));
console.log(staff.add('Robin',23));
console.log(staff.getSize());
console.log(staff.remove('Robin'));
console.log(staff.getSize());

// console.log(staff.add('John',20));
// console.log(staff.add('Robin',10));
// console.log(staff.getSize());
// console.log(staff.remove('Robin'));
// console.log(staff.getSize());

