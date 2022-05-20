/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */



document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const valueKg = document.getElementById('search').value;
  
    document.getElementById('value-pounds').innerHTML = 'Svarai  ' +  valueKg * 2.2046 + ' lb';
    document.getElementById('value-grams').innerHTML = 'Gramai  ' +  valueKg / 0.0010000 + ' g';
    document.getElementById('value-ounce').innerHTML = 'Uncijos  ' +  valueKg * 35.274 + ' oz';
})
   