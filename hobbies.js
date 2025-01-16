//1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
//2. Esporta la funzione dal file.

function createHobbies(hobbyOne, hobbyTwo, hobbyThree){
    return [hobbyOne = "Football", 
            hobbyTwo = "Fishing", 
            hobbyThree = " Watching Movies"];

  }

  module.export = createHobbies;

  const hobby = createHobbies()
  console.log(hobby)