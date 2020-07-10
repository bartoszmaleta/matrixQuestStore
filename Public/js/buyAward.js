const overlayToHide = document.querySelector('#overlay');

const addButtons = document.querySelectorAll('.add-button');

addButtons.addEventListener('click', function (e) {
    e.preventDefault();
    let cardTitle = '';
    let qwe = this.previousSibling;
    console.log('qweqw' + qwe);
    let studentId = sessionStorage.getItem("id");
    // name=zxc&surname=serverS&login=qweasd&password=pass&email=bartosz.maleta@gmail.com&roleId=2&avatarPath=../wwwqw
    const data = `title=${this.title.value}&imageSrc=${this.imageSrc.value}&description=${this.description.value}&price=${this.price.value}&mentorsId=${mentorId}`;
    const data = `cardTitle=${cardTitle}&studentId=${studentId}`

    closeUsedModal(modalToHide, overlayToHide);

    console.log(data);
    setAward(data);
});

function buyAward(data) {
    fetch(`${apiUrl}/awards/buy`,
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {
            console.log(response);
            console.log(data);
            location.reload();
        });
}