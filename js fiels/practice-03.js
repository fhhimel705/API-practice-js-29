

const setRegion = () => {
  const regionUrl = "https://restcountries.com/v3.1/all";
  fetch(regionUrl)
    .then((res) => res.json())
    .then((data) => displayRegion(data));
};
const displayRegion = (data) => {
  const regions = data.map((regions) => regions.region);
  const filterRegions = new Set(regions);
  //   console.log(mySet);
  filterRegions.forEach((region) => {
    // console.log(region);
    const regionUl = document.getElementById("region-ul");
    const regionLi = document.createElement("li");
    regionLi.innerHTML = `
    <a class="dropdown-item" href="#">${region}</a>
    `;
    regionUl.appendChild(regionLi);
  });
};
setRegion();

const setCapital = () => {
    const CapitalUrl = "https://restcountries.com/v3.1/all";
    fetch(CapitalUrl)
    .then(res => res.json())
    .then(data =>{
        // console.log(data[88].capital[0]);
        const city = new Set(data.map(city => city.capital));
        // console.log(city);
        const capitalUl = document.getElementById('capital-ul');
        city.forEach((capital) => {
            // console.log(capital);
            const capitalLi = document.createElement('li');
            capitalLi.innerHTML = `
            <a class="dropdown-item" href="#">${capital}</a>
            `
            capitalUl.appendChild(capitalLi);
        })
    })

}
setCapital();
