var num = Number(prompt("Enter the Numbers:"));
var arr = [0, 1];

for (var i = 0; i < (num - 2); i++) {
    var a = arr[i];
    var b = arr[i + 1];
    var c = a + b;
    arr.push(c);
}
console.log("The desired fibonacci series are "+ arr);