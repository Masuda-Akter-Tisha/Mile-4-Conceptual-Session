// total,thriving,struggling counts function
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

// 3 buttons toggling
const allFilterBtn = document.getElementById ('all-filter-btn');
const thrivingFilterBtn = document.getElementById ('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById ('struggling-filter-btn');

function togglingStyle (id) {
   allFilterBtn.classList.remove ('bg-black', 'text-white');
   thrivingFilterBtn.classList.remove ('bg-black', 'text-white');
   strugglingFilterBtn.classList.remove ('bg-black','text-white'); 
   
   allFilterBtn.classList.add ('bg-gray-300', 'text-black');
   thrivingFilterBtn.classList.add ('bg-gray-300', 'text-black');
   strugglingFilterBtn.classList.add ('bg-gray-300', 'text-black');

   const selected = document.getElementById (id);
   selected.classList.remove ('bg-gray-300', 'text-black');
   selected.classList.add ('bg-black', 'text-white');
}