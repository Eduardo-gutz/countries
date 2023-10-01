const countriesElem=document.querySelector('.countries') 
const desplegar=document.querySelector('.desplegar')
const dropElem=document.querySelector('.drop')
const region=document.querySelectorAll('.region')
const search=document.querySelector('.search')
const cambiar=document.querySelector('.cambiar')
const moon=document.querySelector('.moon')

async function getCountry() {
     const url= await fetch("https://restcountries.com/v3.1/all/");
    const res=await url.json();
    console.log(res);
      res.forEach(element => {
        showCountry(element)
    });   
}
getCountry()
function showCountry(data){
    console.log(data)
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML= `<div class="country-img">
    <img src="${data.flags.svg}" alt="{name}">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name.common}</h5>
    <p><strong>population:</strong>${data.population}</p>
    <p class="regionName"><strong>region:</strong>${data.region}</p>
    <p><strong>capital:</strong>${data.capital}</p>
</div>`
countriesElem.appendChild(country)
country.addEventListener("click", ()=>{
    showcountryDetail(data)
})
}                                                              // `´

desplegar.addEventListener("click",()=>{
    dropElem.classList.toggle("showDropDown")
    console.log("hola");
})

const regionName=document.getElementsByClassName("regionName") 
const countryName=document.getElementsByClassName("countryName") 
region.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element);
     Array.from(regionName).forEach(elem => {
        console.log(elem.innerText);
        if(elem.innerText.includes(element.innerText)|| element.innerText=="All")(
            elem.parentElement.parentElement.style.display="grid"
        )
        else(
            elem.parentElement.parentElement.style.display="none" 
        )
     });
    })
});
search.addEventListener("input",()=>{
    console.log(search.value.toLowerCase())
    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase()))(
            elem.parentElement.parentElement.style.display="grid"
        )
        else(
            elem.parentElement.parentElement.style.display="none" 
        )
     });
})
cambiar.addEventListener("click",()=>{
    document.body.classList.toggle("drack")
    moon.classList.toggle("fas")
})

const countrymodal=document.querySelector(".countrymodal");
function showcountryDetail(data){
    console.log(data)
    countrymodal.classList.toggle("show")
    countrymodal.innerHTML=`<button class="Back">back</button>
    <div class="modal"></div>
    <div class="leftModal">
        <img src=${data.flags.svg} alt="{name}">
    </div>
    <div class="rightModal">
        <h1>"${data.name.common}"</h1>
        <div class="modalinfo">
        <div class="innerleft inner">
            <p><strong>Native name:</strong>${data.Nativename}</p>
            <p><strong>population:</strong>${data.population}</p>
            <p><strong>Region:</strong>${data.Region}</p>
            <p><strong>Sub-region:</strong>${data.Subregion}</p>
        </div>
        <div class="innerright inner">
            <p><strong>capital:</strong>${data.capital}</p>
            <p><strong>Top level domain:</strong>${data.Topleveldomain}</p>
        </div>
        </div>
    </div>`
const Back=countrymodal.querySelector(".Back")
Back?.addEventListener("click",()=>{
    countrymodal.classList.toggle("show")
})
}
