console.log(localStorage.getItem('name'))


const container = document.getElementById('tributeContainer');


document.addEventListener('DOMContentLoaded', function (e) {
  
    const searchQuery = localStorage.getItem('name').toLowerCase(); 

    container.innerHTML = '';

    fetch('../Data/Tribute.json')
        .then(response => response.json())
        .then(data => {
          
            const results = data.Details.filter(person => person.Name.toLowerCase().includes(searchQuery));

            if (results.length > 0) {
                results.forEach(person => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                    <div class="card-head">
                    <h1>A Tribute Page On ${person.Name}</h1>
                        <img src="${person.Image}" alt="${person.Name}">
                        </div>
                        <div class="card-content">
                            <h3 class="name">${person.Name}</h3>
                            <p>${person.Details}</p>
                        </div>
                    `;
                    container.appendChild(card);
                });
            } else {
              
                container.innerHTML = `<p>No results found for "<b></b>".</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            container.innerHTML = `<p>Failed to load data. Please try again later.</p>`;
        });
});
