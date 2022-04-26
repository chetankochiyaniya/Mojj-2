interface student {
    name: string,
    city: string,
    branch: string,
    sayHi: () => string
}

var info: student = {
    name: "Vipul",
    city: "Rajkot",
    branch: "CE",
    sayHi: (): string => { return "Hi there!!" }
}

console.log("Student Information")
console.log(info.name)
console.log(info.city)
console.log(info.branch)
console.log(info.sayHi())