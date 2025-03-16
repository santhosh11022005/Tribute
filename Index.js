// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDJLisyStvfI_LkHLVTr13PL1ExM3iyn-w",
//   authDomain: "tribute-cd5d6.firebaseapp.com",
//   projectId: "tribute-cd5d6",
//   storageBucket: "tribute-cd5d6.firebasestorage.app",
//   messagingSenderId: "920294683675",
//   appId: "1:920294683675:web:b43e75b8bec802c53334be",
//   measurementId: "G-2ZQMGX68HB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




fetch('./assets/Data/Tribute.json')
.then(response => response.json())
.then(data=>{
  console.log(data )
  
data.Details.forEach(person => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <img src="${person.Image}" alt="${person.Name}">
      <div class="card-content">
          <h3>${person.Name}</h3>
          <p>${person.Details}</p>
      </div>
  `;
  container.appendChild(card);
});
});





const form = document.getElementById('searchForm');
const input = document.getElementById('name');
const container = document.getElementById('tributeContainer');


form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    
    // const searchQuery = input.value.trim().toLowerCase(); 

    // container.innerHTML = '';

    // fetch('./assets/Data/Tribute.json')
    //     .then(response => response.json())
    //     .then(data => {
          
    //         const results = data.Details.filter(person => person.Name.toLowerCase().includes(searchQuery));

    //         if (results.length > 0) {
    //             results.forEach(person => {
    //                 const card = document.createElement('div');
    //                 card.className = 'card';
    //                 card.innerHTML = `
    //                     <img src="${person.Image}" alt="${person.Name}">
    //                     <div class="card-content">
    //                         <h3>${person.Name}</h3>
    //                         <p>${person.Details}</p>
    //                     </div>
    //                 `;
    //                 container.appendChild(card);
    //             });
    //         } else {
              
    //             container.innerHTML = `<p>No results found for "<b>${input.value}</b>".</p>`;
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //         container.innerHTML = `<p>Failed to load data. Please try again later.</p>`;
    //     });
    window.location.href="./assets/Pages/Details.html"
    localStorage.setItem('name', input.value);
});



