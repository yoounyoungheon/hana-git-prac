interface Person{
    name: string;
    age: number;
    city: string;
}

const person: Person = {name: 'yh', age: 12, city: 'seoul'}

const updatePerson = (person: Person, name: string, age: number) => {
    person.name = name;
    person.age = age;
    return person;
}

const updatedPerson = updatePerson(person, "alice", 20);
console.log(updatedPerson);