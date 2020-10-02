const baseURL = 'https://api.coinlayer.com/api/';
const key = 'ea2d17431fb2e3120ef5a7f4074082c6';
let url;

const searchForm = document.querySelector('form');
const enter_Date = document.querySelector('.enter_Date');
const cardTitle = document.querySelector('.card-Title1');
const cardText = document.querySelector('.card-Text1')
const cryptosymbol = document.querySelector('.crypto_symbol');
const cardBody = document.querySelector('.card-body');


searchForm.addEventListener('submit', fetchCrypto);

function fetchCrypto(e) {
    e.preventDefault();
    url = `${baseURL}${enter_Date.value}?access_key=${key}`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
       let crypto = json.rates
       cardText.innerText = `${crypto[cryptosymbol.value]}`;
       cardTitle.innerText = cryptosymbol.value;
        console.log(crypto)
    })
}

if(cardTitle == "") {
    cardBody.style.display = 'none'
}else {
    cardBody.style.display = 'block';
}


// for (i in crypto.rates) {
    //     x = crypto.rates[i];
    //     cardTitle.innerText = x;
