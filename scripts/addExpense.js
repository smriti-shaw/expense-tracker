var x = document.getElementById("expense_form");
var createform = document.createElement('form');
createform.setAttribute("action","");
createform.setAttribute("method","post");
x.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "expenses Form";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var namelable1 = document.createElement('label');
namelable1.innerHTML = "Your name";
namelable1.name = "name";
createform.appendChild(namelable1);


var inputElement = document.createElement('input');
createform.appendChild(inputElement);


var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var namelable2 = document.createElement('label');
namelable2.innerHTML = "Date of expense";
createform.appendChild(namelable2);

var x = document.createElement("INPUT");
x.setAttribute("type", "date");
x.setAttribute("id","dateofexp");
createform.appendChild(x);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var namelable3 = document.createElement('label');
namelable3.innerHTML = "Amount";
createform.appendChild(namelable3);

var inputElement = document.createElement('input');
createform.appendChild(inputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var submitElement = document.createElement('input');
submitElement.setAttribute("type","submit");
submitElement.setAttribute('onclick', 'myFunction();' + onclick);
createform.appendChild(submitElement);

function myFunction() {
    console.log("i m inside");
    console.log(document.getElementById("dateofexp").value);
}