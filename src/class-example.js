// class Person {
//     constructor (name, age) {
//         this.name = name;
//         // 实际赋值的是this._age
//         this.age = age;
//     }

//     // getter
//     get age () {
//         console.log("get age");
//         return this._age;
//     }

//     // setter
//     set age (age) {
//         console.log("set age");
//         this._age = age;
//         // 下面的写法会报无限循环，报栈溢出
//         // this.age = age; 
//         //原理是执行this.age=age的时候，会调用set age，
//     }

//     // 当只有getter的时候，该属性是只读，无法初始化

//     // 成员方法
//     sayHello () {
//         console.log("hello, my name is " + this.name);
//     }

//     // 静态方法
//     static say () {
//         console.log("i'am a Person!");
//     }
// }


// // 继承
// class Student extends Person{
//     constructor (name, age, school) {
//         // 调用父类的构造函数，Person.call(this, name);
//         super(name, age);
//         this.school = school;
//     }

//     // 覆盖成员方法
//     sayHello () {
//         // 相当于Person.prototype.sayName.call(this);
//         super.sayHello();
//         console.log("i'am from " + this.school);
//     }
// }

// // 静态方法调用
// Person.say();

// var p = new Person("zhang", 25);
// p.sayHello();

// var s = new Student("zhang", 25, "scut");
// s.sayHello();

// // 验证s的属性并非私有，并且存在s.age和s._age

// console.log("s.age = " + s.age + "<--> s._age= " + s._age);

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    set name (name) {
        console.log("setter");
        this._name = name;
    }
    get name () {
        console.log("getter");
        return this._name;
    }

    // 加一个成员方法
    sayName () {
        console.log(this.name);
    }
}

var p = new Person("zhang", 25); 
console.log(p._name);