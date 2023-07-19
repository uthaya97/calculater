var a=prompt("enter the first value");
var operator=prompt("enter the  operator");
var b=prompt("enter the second value");
var c;
switch(operator){
		case "+":
			c=a+b;
			document.write(c);
			console.log(c);
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

}