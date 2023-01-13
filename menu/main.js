const searchForm = document.querySelector('form');
const searchRes = document.querySelector('.search-result');
const container = document.querySelector('.container');
const search = document.getElementById('search');
let searchQuery = '';

// API Info
const API_ID = 'db8705b8';
const API_KEY = '043e07074ec20dde5fbbf071e255bda4';

// Event for calling API
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    searchQuery = e.target.search.value;
    // searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=25`;
    const response = await fetch(baseURL);
    // console.log(response);
    const data = await response.json();
    generateHTML(data.hits);
    // console.log(data);
};

//Adding API results to DOM
function generateHTML(results) {
    let generatedHTML = results.map(result => {
        return `
        <div class="item">
            <img src=${result.recipe.image} alt="" class="photo">
            <div class="flex-container" style="display: flex; align-items: center; justify-content: space-between;">
                <h4 style="margin-top: 10px; padding-top: 8px; text-transform: none; letter-spacing: 0.3rem;">${result.recipe.label}</h4>
                <a href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Cuisine: ${result.recipe.cuisineType.length > 0 ? result.recipe.cuisineType : 'No Data Found'}</p>
            <p class="item-data">Diet Labels: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
            <p class="item-data">Health Labels: ${result.recipe.healthLabels}</p>
        </div>
        `;
    }).join(" ");

    searchRes.innerHTML = generatedHTML;
};


//Search icon
// const searchBtn = document.getElementById('searchBtn');
// searchBtn.addEventListener('click', function(e) {
//     searchQuery = e.target.value;
//     if(searchQuery !== 'undefined') {
//         console.log(searchQuery);
//         fetchAPI();
//     }
//     // searchQuery = e.target.search.value;
    
// })