const baseURL = 'http://api.coinlayer.com/api/change';
const key = 'ea2d17431fb2e3120ef5a7f4074082c6';
let url;

const searchForm = document.querySelector('form');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const cardImage = document.querySelector('.card-img-top');
const start_Date = document.querySelector('.start_date');
const end_Date = document.querySelector('.end_date');
const symbols = document.querySelector('.symbol');




searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault(e);
    url= baseURL+key;
    // url = `${baseURL}?api-key=${key}&start_date=${start_Date.value}&end_date=${end_Date.value}&symbol=${symbols.value}`;
    // if (startDate.value !== '') {  
    //     console.log(startDate.value)
    //     url += '&start_date=' + startDate.value;
    //     console.log('URL:', url);
    // }
    // if (endDate.value !== '') {
    //     console.log(endDate.value)
    //     url += '&end_date=' + endDate.value;
    //     console.log('URL:', url);
}
fetch(url)
    .then(res => res.json())
    .then(json => {
console.log(json);
})
fetchResults()