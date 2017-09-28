//ts学习
function greeter(person: string) {
  return "hello," + person;
}
let user = "lynn";
console.log(greeter(user));

let hello = [1, 2];
//greeter(hello);

interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person:Person){
return 'hello'+person.firstName+person.lastName
}
let user2={
  firstName:'lynn',
  lastName:'zeng'
}
greeter2(user2)

class Student {
  fullName:string;
  constructor(public firstName:string,public middleInitial:string,public lastName:string ){
    this.fullName=firstName+''+middleInitial+lastName
  }
}
let user3=new Student('lynn','M.','hi')
console.log(greeter2(user3))
