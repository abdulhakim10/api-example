const countryLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetails = code => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <h4>Continents: ${country.continents[0]}</h4>
    <img src="${country.flags.png}">
    `;
}
countryLoad()