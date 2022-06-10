

    const getCountryByName =  (countryName) => {
      fetch("https://restcountries.com/v2/name/" + countryName)
        .then((response) => {
          if (!response.ok) {
            alert("Please enter a country.");
          }
          return response.json();
        })
        .then((data) => countryInfo(data));
    
    const countryInfo = (data) =>  {
      const  name  = data[0].name;
      const population  = data[0].population;
      const flag = data[0].flags.png;
      document.querySelector(".country").innerHTML =  name;
      document.querySelector(".population").innerHTML = "Population: " + population;
      document.querySelector(".image").src = flag;
     
    }


document.querySelector(".search_button").onclick = function (){
    const initial= document.querySelector(".search_bar").value
    getCountryByName(initial)
  
};
}

getCountryByName("spain");

