let total = document.getElementById ('total');
let thrivingCount = document.getElementById ('thrivingCount');
let strugglingCount = document.getElementById ('strugglingCount');

const allCardsSection = document.getElementById ('all-cards');
// console.log (cards.children.length);
let thrivingList = [];
let strugglingList = [];

function calculateCount () {
    total.innerText = allCardsSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount ();