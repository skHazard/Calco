
var display = document.getElementById("display");

function addToDisplay(x)
{
display.value += x;

	if(x=="C")
	{
		display.value= " ";
	}

}

function result()
{
	x = display.value;
	x = eval(x);
	display.value = x;
}

function backspace()
{
var number = display.value;
var length = number.length - 1;
var newnumber = number.substring(0, length);
display.value = newnumber;
}

function mathSquare(x)
{
	x = display.value;
	x = Math.sqrt(x);
	display.value = x;

}