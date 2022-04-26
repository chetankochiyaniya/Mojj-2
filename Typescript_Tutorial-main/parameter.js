console.log("--------------------------------------");
console.log("Defult Parameter");
console.log("--------------------------------------");
function ourprice(price, rate) {
    if (rate === void 0) { rate = 0.15; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
ourprice(4000);
ourprice(4000, 0.23);
console.log("\n--------------------------------------");
console.log("Optional Parametrer");
console.log("--------------------------------------");
function student(fname, lname, mail) {
    console.log("First Name: ", fname);
    console.log("Last Name: ", lname);
    if (mail != undefined)
        console.log("Email Id: ", mail);
}
student("Vipul", "Bavaliya");
student("Vipul", "Bavaliya", "vsbavaliya1883@gmail.com");
console.log("\n--------------------------------------");
console.log("Rest Parametrer");
console.log("--------------------------------------");
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Summation of Numbers: ", sum);
}
add(1, 2, 3, 4, 5);
add(14, 56, 98, 884, 10);
