const container = document.querySelector(".container");

function getCountQuestsByMentor() {
    fetch(`${apiUrl}/mentors/questsByMentor`)
        .then(function(response){
            return response.json();
        })
        .then(function(questsByMentor){
            innerQuestsByMentor(questsByMentor)

        })
}

function innerQuestsByMentor(questsByMentor) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>MENTOR</th><th>Amount of quests added</th></tr>";
    container.appendChild(table);
    console.log(questsByMentor);

    questsByMentor.forEach(line => {
        console.log(line);
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${line.mentorNameAndSurname}</td>
            <td>${line.amountOfQuestsCount}</td>
        `;
        table.appendChild(row);
    });
}

getCountQuestsByMentor();