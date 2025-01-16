//1. Importa la tua funzione da names.js
//2. Importa la tua funzione da hobbies.js
//3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

 const {createNames} = require("./names.js");
const {createHobbies} = require("./hobbies.js");
  
  function createPerson(){
   const fullName = createNames("Raffaele " , "Molinaro")
   const hobby = createHobbies("Football", "Fishing", " Watching Movies")

   
    return { fullName, hobby}
  }

  const person = createPerson();
  console.log(person)


