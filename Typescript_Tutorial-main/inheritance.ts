console.log("-------------------------------------")
console.log("Single Inheritance")
console.log("-------------------------------------")

interface person {
    numberofpeople: number
}

interface dance extends person {
    type: string
}

var dance = <dance>{};
dance.numberofpeople = 5
dance.type = "Garba"
console.log("Number of People: " + dance.numberofpeople)
console.log("Type: " + dance.type)

console.log("\n-------------------------------------")
console.log("Multiple Inheritance")
console.log("-------------------------------------")

interface stud1 {
    name: string
}

interface stud2 {
    rollno: number
}
interface info extends stud1, stud2 { }
var studinfo: info = { name: "Vipul", rollno: 2 }
console.log("Name: " + studinfo.name)
console.log("Roll No.: " + studinfo.rollno)