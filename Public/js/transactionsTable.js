const container = document.querySelector(".container");

function getTransactions() {
    let studentId = sessionStorage.getItem('id');
    fetch(`${apiUrl}/students/transactions/${studentId}`)
        .then(function(response){
            return response.json();
        })
        .then(function(transactions){
            innerTransactions(transactions)

        })
}

function innerTransactions(transactions) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>TRANSACTION ID</th><th>CARD TITLE</th><th>DATE OF PURCHASE</th><th>PRICE</th><th>OWNER</th></tr>";
    container.appendChild(table);
    console.log(transactions);

    transactions.forEach(transaction => {
        let row = document.createElement("tr");
        // TODO: should be in loop
        // row.append(column);
        console.log(transaction);
        row.innerHTML = `
            <td>${transaction.transactionId}</td>
            <td>${transaction.awardTitle}</td>
            <td>${transaction.boughtAt}</td>
            <td>${transaction.price}</td>
            <td>${transaction.owner}</td>
        `;
        table.appendChild(row);
    });
}

getTransactions();