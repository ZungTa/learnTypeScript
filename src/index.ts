interface Human {
    name: string;
    age: number;
    gender: string;
}
interface AD {
    ad: string;
    ad2: string;
    ad3: string;
}

const person = {
    name: 'bwpark',
    age: 27,
    gender: 'male',
    ad: 'good',
    ad2: 'qwe',
    ad3: 'eee',
}

function sayHi(person: Human):void {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    console.log(person);
}

function hi2(ad: AD) {

}

sayHi(person);
hi2(person);

export {};