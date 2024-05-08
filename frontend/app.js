class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi i am ${this.name}`);
    }
}
class Students extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    greet(){
        return "hello";
    }
}
let t1=new Students("areeba",19,99);
let s1=new Person("Anurag",19);
let s2=new Person("ariba",19);