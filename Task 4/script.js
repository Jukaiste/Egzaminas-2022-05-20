/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir jis atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const fetchCarsList = async (brand, models) => {
    const response = await fetch(ENDPOINT);
    const carsList = await response.json();
console.log(carsList);
carsContainer(carsList);
}
function carsContainer(carsList) {
const addCarsList = document.getElementById('output');
addCarsList.innerText = '';

carsList.forEach((car) => {

    const carBrand = document.createElement('div');
    carBrand.innerText = car.brand;
    carBrand.style.fontSize = '2rem';
    carBrand.style.color = 'blue';
    carBrand.style.margin = '1rem';
    



    const carModels = document.createElement('div');
    carModels.innerText = car.models;
    carModels.style.margin = '0 1.5rem';
    carModels.style.wordBreak = 'break-word';
    carModels.style.backgroundColor = 'yellow';
    carModels.style.border = '1px solid yellow';
    carModels.style.borderRadius = '1rem'
    carModels.style.padding = '2rem';
   


   



   addCarsList.append(carBrand, carModels);
});


}
fetchCarsList()