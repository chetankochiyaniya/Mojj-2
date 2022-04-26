// Employee interface 😁
interface employee {
    ecode: number,
    name: string,
    designation: string,
    salary: number
}
// Employee Details 😎
var details1: employee = {
    ecode: 1111111,
    name: "Vipul",
    designation: "Front end Developer",
    salary: 30000
}
var details2: employee = {
    ecode: 1232644,
    name: "Yash",
    designation: "Cyber Crime & Investigation",
    salary: 15000
}
var details3: employee = {
    ecode: 1825483,
    name: "Sagar",
    designation: "App Developer",
    salary: 12000
}

// HRA Calculation 😵
function HRA(salary) {
    var HRA = 0.1 * salary;
    return HRA
};

// DA Calculation 😵
function DA(salary) {
    var DA = 0.45 * salary;
    return DA
};

// TOTAL Calculation 🥴
function TOTAL(HRA, DA, salary) {
    var TOTAL = HRA + DA + salary;
    return TOTAL
}
// Print Information 👱‍♂️
console.log("------------------------------")
console.log("*****Employee Information*****")
console.log("------------------------------\n")
console.log("Employee code:" + details1.ecode + "\nName: " + details1.name + "\nDesignation: " + details1.designation + "\nBasic Pay: " + details1.salary + "\nHRA: " + HRA(details1.salary) + "\nDA: " + DA(details1.salary) + "\nTotal: " + TOTAL(HRA(details1.salary), DA(details1.salary), details1.salary))
console.log("------------------------------")
console.log("Employee code:" + details2.ecode + "\nName: " + details2.name + "\nDesignation: " + details2.designation + "\nBasic Pay: " + details2.salary + "\nHRA: " + HRA(details2.salary) + "\nDA: " + DA(details2.salary) + "\nTotal: " + TOTAL(HRA(details2.salary), DA(details2.salary), details2.salary))
console.log("------------------------------")
console.log("Employee code:" + details3.ecode + "\nName: " + details3.name + "\nDesignation: " + details3.designation + "\nBasic Pay: " + details3.salary + "\nHRA: " + HRA(details3.salary) + "\nDA: " + DA(details3.salary) + "\nTotal: " + TOTAL(HRA(details3.salary), DA(details3.salary), details3.salary))