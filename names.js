//1.Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
//2. Esporta la funzione dal file.


function createNames( firstName , lastName){
  return {firstName : "Raffaele " , 
          lastName : "Molinaro"};
}

console.log(createNames())
module.exports = { createNames} ;



