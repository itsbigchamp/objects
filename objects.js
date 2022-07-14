
let person = {
name: 'Gavin',
lastName: 'Anderson',
age: 26,
inClass: true,
classInSession: ['JavaScript','Arrays']
}
person.name = "Champ" //edit
person.hasGlasses = true; //add a new property
console.log(person);

person.Age = 24  //mistyped age
console.log(person)



// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") != -1
// console.log(hasAge)






// let {lastName, inClass} = person // destructuring
// console.log(lastName)
// console.log(inClass)


// delete person.name 
// console.log(person.name)
// // console.log(person.)

// console.log(person)