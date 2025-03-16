

const form = document.getElementById('searchForm');
const input = document.getElementById('name');
const container = document.getElementById('tributeContainer');


form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    
    window.location.href="./assets/Pages/Details.html"
    localStorage.setItem('name', input.value);
});




fetch('./assets/Data/Tribute.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Check data structure in console

        data.Details.forEach(person => {
            // const card = document.createElement('div');
            // card.className = 'card';

            // Set anchor link with person name as query parameter
            container.innerHTML = `
                <a href="./assets/Pages/Details.html?name=${encodeURIComponent(person.Name)}">
                    <img src="${person.Image}" alt="${person.Name}"></a>
                    <div class="card-content">
//           <h3>${person.Name}</h3>
//           <p>${person.Details}</p>
//       </div>
                
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
