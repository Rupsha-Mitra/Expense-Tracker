<<<<<<< HEAD
let budgetField = document.getElementById("budget-value");

document.getElementById('budget-btn').addEventListener("click", ()=>{
    let budgetVal = budgetField.value;
    document.getElementById('budget-detail').innerText = budgetVal;
});


document.getElementById('add-btn').addEventListener("click", () => {
    let category = document.getElementById('category').value;
    let amount = document.getElementById('expense-amount').value;
    let amountNum = parseFloat(amount);

    if(category && amount) {
        let tableBody = document.querySelector('#expense-table');
        let newRow = tableBody.insertRow();

        let category_cell = newRow.insertCell(0);
        let amount_cell = newRow.insertCell(1);
        let delete_cell = newRow.insertCell(2);

        let deleteButton = document.createElement("button");
        let deleteIcon = document.createElement("img");
        deleteIcon.src = "./bin.png";
        deleteIcon.style.width = '20px';
        deleteIcon.style.height = '20px';


        category_cell.textContent = category;
        amount_cell.textContent = amount;
        deleteButton.appendChild(deleteIcon);
        delete_cell.appendChild(deleteButton);

        category= '';
        amount = '';

       


        //update expense value
        let expenseVal = document.getElementById("expense-detail").innerText;
        let expenseValNum = parseFloat(expenseVal);

        

        expenseValNum = expenseValNum + amountNum;
        document.getElementById("expense-detail").innerText = String(expenseValNum);

        //update balance
        let budget = document.getElementById('budget-detail').innerText;
        let budgetNum = parseFloat(budget);

        let balanceVal = document.getElementById('balance-detail').innerText;
        let balanceNum = parseFloat(balanceVal);

        balanceNum = budgetNum - expenseValNum;
        document.getElementById("balance-detail").innerText = String(balanceNum);
        
        //delete button
        deleteButton.addEventListener("click", function () {
            let currentRow = this.parentElement.parentElement; // 'this' refers to deleteButton
            let cells = currentRow.cells;
            let currentExpense = cells[1].textContent; // Get the expense value from the second cell
            currentExpense = parseFloat(currentExpense); // Convert it to a number
        
            // Update the expense and balance values
            expenseValNum = expenseValNum - currentExpense;
            balanceNum = balanceNum + currentExpense;
        
            // Remove the row from the table
            currentRow.remove();
        
            // Update the display for expense and balance
            document.getElementById("expense-detail").innerText = String(expenseValNum);
            document.getElementById("balance-detail").innerText = String(balanceNum);
        });
        

            
      

        
    }
=======
let budgetField = document.getElementById("budget-value");

document.getElementById('budget-btn').addEventListener("click", ()=>{
    let budgetVal = budgetField.value;
    document.getElementById('budget-detail').innerText = budgetVal;
});


document.getElementById('add-btn').addEventListener("click", () => {
    let category = document.getElementById('category').value;
    let amount = document.getElementById('expense-amount').value;
    let amountNum = parseFloat(amount);

    if(category && amount) {
        let tableBody = document.querySelector('#expense-table');
        let newRow = tableBody.insertRow();

        let category_cell = newRow.insertCell(0);
        let amount_cell = newRow.insertCell(1);

        category_cell.textContent = category;
        amount_cell.textContent = amount;

        category= '';
        amount = '';

        //update expense value
        let expenseVal = document.getElementById("expense-detail").innerText;
        let expenseValNum = parseFloat(expenseVal);

        

        expenseValNum = expenseValNum + amountNum;
        document.getElementById("expense-detail").innerText = String(expenseValNum);

        //update balance
        let budget = document.getElementById('budget-detail').innerText;
        let budgetNum = parseFloat(budget);

        let balanceVal = document.getElementById('balance-detail').innerText;
        let balanceNum = parseFloat(balanceVal);

        balanceNum = budgetNum - expenseValNum;
        document.getElementById("balance-detail").innerText = String(balanceNum);



        
    }
>>>>>>> origin/main
});