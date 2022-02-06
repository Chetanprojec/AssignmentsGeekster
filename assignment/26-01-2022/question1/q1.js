var a = prompt("Enter First Number");
parseInt(a);
var b = prompt("Enter Second Number");
parseInt(b);
var c = prompt("Enter Third Number");
parseInt(c);
if(a<b && a<c)
{
alert("The minimum Number" + a);

}
if(b<a && b<c)
{
alert("The minimum Number is" + b);

}
if(c<a && c<b)
{
alert("The minimum Number is" + c);
}

