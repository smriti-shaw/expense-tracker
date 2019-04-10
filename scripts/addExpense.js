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

var username = document.createElement('label');
username.innerHTML = "Your name";
username.name = "name";
createform.appendChild(username);

var nameInputElement = document.createElement('input');
createform.appendChild(nameInputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);


var expenseType = document.createElement('label');
expenseType.innerHTML = "Expense type";
expenseType.name = "Expense type";
createform.appendChild(expenseType);

var expenseTypeInputElement = document.createElement('input');
createform.appendChild(expenseTypeInputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);


var expenseName = document.createElement('label');
expenseName.innerHTML = "Expense name";
expenseType.name = "Expense name";
createform.appendChild(expenseName);

var expenseNameInputElement = document.createElement('input');
createform.appendChild(expenseNameInputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);


var doe = document.createElement('label');
doe.innerHTML = "Date of expense";
createform.appendChild(doe);

var doeInput = document.createElement("INPUT");
x.setAttribute("id","dateofexp");
createform.appendChild(doeInput);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var amount = document.createElement('label');
amount.innerHTML = "Amount";
createform.appendChild(amount);

var amountInputElement = document.createElement('input');
createform.appendChild(amountInputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var submitElement = document.createElement('input');
submitElement.setAttribute('onclick', 'myFunction();' + onclick);
submitElement.setAttribute("type","submit");
createform.appendChild(submitElement);

function myFunction() {

    var userName = nameInputElement.value;
    var expenseType = expenseTypeInputElement.value;
    var expenseName = expenseNameInputElement.value;
    var dateOfExpense = doeInput.value;
    var amount = amountInputElement.value;

    var expenseMap = new Map();
    expenseMap.set("userName",userName);
    expenseMap.set("expenseType",expenseType);
    expenseMap.set("expenseName",expenseName);
    expenseMap.set("dateOfExpense",dateOfExpense);
    expenseMap.set("amount",amount);
}