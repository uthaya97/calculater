var a=parseInt(prompt("enter the first value"));
var operator=prompt("enter the  operator");
var b=parseInt(prompt("enter the second value"));
var c;
switch(operator)
{
		case "+":
			c=a+b;
			document.write(c);
			break;
		case "-":
  			c=a-b;
			document.write(c);
			break;
		case "*":
  			c=a*b;
			document.write(c);
			break;
		case "%":
  			c=a/b;
			document.write(c);
			break;
		default:
			break;

}