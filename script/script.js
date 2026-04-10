// total,thriving,struggling counts function
let total = document.getElementById ('total');
let thrivingCount = document.getElementById ('thrivingCount');
let strugglingCount = document.getElementById ('strugglingCount');
let emptyState = document.getElementById ('empty-state');
let treeCount = document.getElementById ('tree-count');

let thrivingList = [];
let strugglingList = [];
let currentStatus = 'all-filter-btn';

const allCardsSection = document.getElementById ('all-cards');
// console.log (cards.children.length);

function calculateCount () {
    total.innerText = allCardsSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount ();

function updateAvailableTree() {
    if (currentStatus === 'all-filter-btn') {
        treeCount.innerText = allCardsSection.children.length;
    }
    else if (currentStatus === 'thriving-filter-btn') {
        treeCount.innerText = thrivingList.length;
    }
    else if (currentStatus === 'struggling-filter-btn') {
        treeCount.innerText = strugglingList.length;
    }
}

updateAvailableTree ();

// 3 buttons toggling
const allFilterBtn = document.getElementById ('all-filter-btn');
const thrivingFilterBtn = document.getElementById ('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById ('struggling-filter-btn');

function togglingStyle (id) {
    
   allFilterBtn.classList.add ('bg-gray-300', 'text-black');
   thrivingFilterBtn.classList.add ('bg-gray-300', 'text-black');
   strugglingFilterBtn.classList.add ('bg-gray-300', 'text-black');

   allFilterBtn.classList.remove ('bg-black', 'text-white');
   thrivingFilterBtn.classList.remove ('bg-black', 'text-white');
   strugglingFilterBtn.classList.remove ('bg-black','text-white'); 

   const selected = document.getElementById (id);
   selected.classList.remove ('bg-gray-300', 'text-black');
   selected.classList.add ('bg-black', 'text-white');

   emptyState.classList.add ('hidden');

   currentStatus = id;
   console.log (currentStatus);

    if (id === 'all-filter-btn') {
    allCardsSection.classList.remove ('hidden');
    filterSection.classList.add ('hidden');
    if (allCardsSection.children.length < 1) {
        emptyState.classList.remove ('hidden');
    }
   }
   else if (id === 'thriving-filter-btn') {
    allCardsSection.classList.add ('hidden');
    filterSection.classList.remove ('hidden');
     if (thrivingList.length < 1) {
        emptyState.classList.remove ('hidden');
    }
    renderThriving ();
   }
   else if (id === 'struggling-filter-btn') {
    allCardsSection.classList.add ('hidden');
    filterSection.classList.remove ('hidden');
     if (strugglingList.length < 1) {
        emptyState.classList.remove ('hidden');
    }
    renderStruggling ();
   }
   updateAvailableTree ();
}

// main container function
const mainContainer = document.getElementById ('main-container');
mainContainer.addEventListener ('click', function (event) {
// console.log (event.target.classList.contains ('thrive-btn'));

    if (event.target.classList.contains ('thrive-btn')) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector ('.plantName').innerText;
    const latinName = parentNode.querySelector ('.latinName').innerText;
    const light = parentNode.querySelector ('.light').innerText;
    const weekly = parentNode.querySelector ('.weekly').innerText;
    const status = parentNode.querySelector ('.status').innerText;
    const notes = parentNode.querySelector ('.notes').innerText;

    parentNode.querySelector ('.status').innerText = 'Thrive';
    parentNode.querySelector ('.status').classList.add ('border-2', 'border-green-200', 'px-[5px]', 'py-[5px]', 'w-[150px]', 'rounded-md');
   
   const cardInfo = {
    plantName,
    latinName,
    light,
    weekly,
    status : 'Thrive',
    notes
   }

   const plantExist = thrivingList.find (item => item.plantName === cardInfo.plantName);

   if (!plantExist) {
    thrivingList.push (cardInfo);
   }

     strugglingList = strugglingList.filter (item => item.plantName != cardInfo.plantName);

     if (currentStatus === 'struggling-filter-btn') {
        renderStruggling ();
     }

   calculateCount ();
   updateAvailableTree();

    }
    else if (event.target.classList.contains ('struggle-btn')) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector ('.plantName').innerText;
    const latinName = parentNode.querySelector ('.latinName').innerText;
    const light = parentNode.querySelector ('.light').innerText;
    const weekly = parentNode.querySelector ('.weekly').innerText;
    const status = parentNode.querySelector ('.status').innerText;
    const notes = parentNode.querySelector ('.notes').innerText;

    parentNode.querySelector ('.status').innerText = 'Struggle';
    parentNode.querySelector ('.status').classList.add ('border-2', 'border-red-200', 'px-[5px]', 'py-[5px]', 'w-[150px]', 'rounded-md');
   
   const cardInfo = {
    plantName,
    latinName,
    light,
    weekly,
    status : 'Struggle',
    notes
   }

   const plantExist = strugglingList.find (item => item.plantName === cardInfo.plantName);

   if (!plantExist) {
    strugglingList.push (cardInfo);
   }
    thrivingList = thrivingList.filter (item => item.plantName != cardInfo.plantName);

    if (currentStatus === 'thriving-filter-btn') {
         renderThriving ();
    }

   calculateCount ();
   updateAvailableTree();

    }
    else if (event.target.classList.contains ('delete')){
       const parentNode = event.target.parentNode.parentNode;
       const plantName = parentNode.querySelector ('.plantName').innerText;

       parentNode.remove ();

       thrivingList = thrivingList.filter (item => item.plantName !== plantName);
       strugglingList = strugglingList.filter (item => item.plantName !== plantName);

       if (currentStatus === 'thriving-filter-btn') {
        renderThriving ();
       }
       else if (currentStatus === 'struggling-filter-btn') {
        renderStruggling ();
       }

        if(
          (currentStatus === 'all-filter-btn' && allCardsSection.children.length < 1) ||
          (currentStatus === 'thriving-filter-btn' && thrivingList.length < 1) ||
          (currentStatus === 'struggling-filter-btn' && strugglingList.length < 1)
       ) {
        emptyState.classList.remove ('hidden');
       }


       calculateCount (); 
       updateAvailableTree ();
    }
})


const filterSection = document.getElementById ('filter-section');

function renderThriving () {
    filterSection.innerHTML = '';

    for (let thrive of thrivingList) {
        console.log (thrive);

        let div = document.createElement ('div');
        div.className = 'border-2 border-gray-200 flex justify-between p-6 rounded-md';
        div.innerHTML = `
           <!-- main part-1 -->
                <div class="space-y-5">
                    <!-- part-1 -->
                     <div>
                        <p class="plantName text-3xl">${thrive.plantName}</p>
                        <p class="latinName text-2xl text-gray-500">Latin Name</p>
                     </div>
                     <!-- part-2 -->
                      <div class="flex gap-4">
                        <p class="light bg-gray-300 px-3 py-2">Light Indicate</p>
                        <p class="weekly bg-gray-300 px-3 py-2">Weekly</p>
                      </div>
                      <!-- part-3 -->
                       <p class="status">${thrive.status}</p>
                       <p class="notes">New leaf unfurling by the east window.</p>
                       <!-- part-4 -->
                        <div class="space-x-4">
                            <button class="thrive-btn bg-green-200 rounded-md py-2 px-5 active:scale-95 transition-all">Thrive</button>
                            <button class="struggle-btn bg-red-200 rounded-md py-2 px-5 active:scale-95 transition-all">Struggle</button>
                        </div>
                </div>

                <!-- main part-2 -->
                <div>
                    <button class="delete bg-red-200 text-red-600 py-2 px-4 rounded-sm active:scale-95 transition-all">Delete</button>
                </div>    
        `
        filterSection.appendChild (div);
    }
}
function renderStruggling () {
    filterSection.innerHTML = '';

    for (let struggle of strugglingList) {
        console.log (struggle);

        let div = document.createElement ('div');
        div.className = 'border-2 border-gray-200 flex justify-between p-6 rounded-md';
        div.innerHTML = `
           <!-- main part-1 -->
                <div class="space-y-5">
                    <!-- part-1 -->
                     <div>
                        <p class="plantName text-3xl">${struggle.plantName}</p>
                        <p class="latinName text-2xl text-gray-500">Latin Name</p>
                     </div>
                     <!-- part-2 -->
                      <div class="flex gap-4">
                        <p class="light bg-gray-300 px-3 py-2">Light Indicate</p>
                        <p class="weekly bg-gray-300 px-3 py-2">Weekly</p>
                      </div>
                      <!-- part-3 -->
                       <p class="status">${struggle.status}</p>
                       <p class="notes">New leaf unfurling by the east window.</p>
                       <!-- part-4 -->
                        <div class="space-x-4">
                            <button class="thrive-btn bg-green-200 rounded-md py-2 px-5 active:scale-95 transition-all">Thrive</button>
                            <button class="struggle-btn bg-red-200 rounded-md py-2 px-5 active:scale-95 transition-all">Struggle</button>
                        </div>
                </div>

                <!-- main part-2 -->
                <div>
                    <button class="delete bg-red-200 text-red-600 py-2 px-4 rounded-sm active:scale-95 transition-all">Delete</button>
                </div>    
        `
        filterSection.appendChild (div);
    }
}