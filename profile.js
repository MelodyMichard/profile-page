let crc = 2;
let crcElement = document.querySelector("#connection-request-counter");

let ycc = 500;

let names = ["Ervin Kato", "Bilbo Elo", "Olivia Kreszentia"];


function removeElement(elementId) {
    let e = document.querySelector(elementId);
    e.remove();
    crc = crc - 1;
    crcElement.innerText = crc;
}

function updateName(elementId) {
    let e = document.querySelector(elementId);
    let number = Math.floor(Math.random()*(2-0+1)+0);
    e.innerText = names[number];
}

function updateConnections(elementId, elementId2) {
    let e = document.querySelector(elementId);
    ycc = ycc + 1;
    e.innerText = ycc;

    removeElement(elementId2);

}