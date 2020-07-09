const container = document.querySelector(".container-awards");

function getAwards() {
    fetch(`http://localhost:8003/awards`)
        .then(function(response){
            return response.json();
        })
        .then(function(awards){
            innerAwards(awards)

        })
}

function innerAwards(awards) {
    let cards = document.createElement("div");
    cards.className = "cards";
    
    console.log(cards);

    awards.forEach(award => {
        let cardElement = document.createElement("div");
        cardElement.className = "card";

        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.innerText = award.title;

        let cardImage = document.createElement("div");
        cardImage.className = "card-image";
        let img = document.createElement("img");
        console.log('img src award');
        console.log(award.imageSrc);
        img.src = "../../resoruces/awardLogo/" + award.imageSrc;
        cardImage.appendChild(img);

        let cardDescription = document.createElement("div");
        cardDescription.className = "card-description";
        cardDescription.innerText = award.description;

        let cardPills = document.createElement("div");
        cardPills.className = "card-pillPrice";

        let closeButton = document.createElement("button");
        closeButton.className = "close-button";
        closeButton.innerText = "x";
        closeButton.id = "card-close-button";
        addEventDeleteToCard(closeButton); // mine

        cardPills.innerText = "cost: " + award.price + " p";

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardPills);
        cardElement.appendChild(closeButton);
        cards.appendChild(cardElement);
        container.appendChild(cards);

    });

}


getAwards();

function addEventDeleteToCard(button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('x button!!!');
    });
}
