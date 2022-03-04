// URL information
const url = 'https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json'

//Selcting Elements
const main = document.getElementById("main");

/*Call the ecoFunction function to request the economy data from the Api using fetch.
Then put those data in the main HTML tag by creating elments for those data. */

ecoFunction(url);
function ecoFunction(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.forEach(data => {

           // Creating elemnts for our data inside the main tag. 
           const div = document.createElement('tr');
           //const leverantor = document.createElement('h1');
           const forvalt = document.createElement('td');
           const konto = document.createElement('td');
           const leverantor = document.createElement('td')
           const konterat = document.createElement('td')
           const org = document.createElement('td')
           const fakt = document.createElement('td')
           
   
           forvalt.innerHTML = data.forvaltning;
           konterat.innerHTML = data.konterat
        
           konto.innerHTML = data.konto;
           leverantor.innerHTML = data.leverantor;
           org.innerHTML = data['org.nr'];
           fakt.innerHTML = data['fakt.nr'];
           
          div.appendChild(fakt); 
          div.appendChild(forvalt);
          div.appendChild(konterat)
          div.appendChild(konto);
          div.appendChild(leverantor); 
          div.appendChild(org)
          main.appendChild(div);
       }); 
   });
   }
   