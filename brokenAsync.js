const axios = require("axios")


const result = await axios.get("http://localhost:3000/liste/types")
console.log({result});

async function demonDeMinuit(){
  console.log("#1 : ", "Voici la liste des types de pokemon");
  
  // Execute la fonction apres 2 secondes
  // await setTimeout(() => {  console.log("#2 : ", "Au bout de la nuit!"); }, 2001);
  // await setTimeout(() => {  console.log("#2' : ", "Qui ca qui ca?"); }, 2000);
  const result = axios.get("http://localhost:3000/liste/types")
  console.log("#2 " + result.data);  
  console.log("#3 : ", "Il y en a 16");
}

demonDeMinuit()

// Les console.log ne s'imprime pas dans le bon ordre..!
