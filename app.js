// API information
const url = 'https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json'

//Selcting Elements
const main = document.getElementById("main");

/*Call the ecoFunction function to request the economy data from the Api using fetch.
Then put those data in the main HTML tag by creating elments for those data. */

ecoFunction(url);
function ecoFunction(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.forEach(element => {

           // Creating elemnts for our data inside the main tag. 
           const div = document.createElement('div');
           //const leverantor = document.createElement('h1');
           const forvalt = document.createElement('h1');
         //  const konto = document.createElement('h3');
          
           
   
           forvalt.innerHTML = `${element.forvaltning}`;
         //  konto.innerHTML = `${element.konto}`;
          // leverantor.innerHTML = `${element.leverantor}`;
           
         //  div.appendChild(leverantor);
           div.appendChild(forvalt);
        //   div.appendChild(konto);
          main.appendChild(div);
       }); 
   });
   }
   