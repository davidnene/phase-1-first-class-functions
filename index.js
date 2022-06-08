function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }


  function runFiveMiles() {
      console.log("Go for a five-mile run");
  }

  function liftWeights() {
      console.log("Pump iron");
  }

  function swimFortyLaps() {
      console.log("Swim 40 laps")
  }

  function Monday() {
      runFiveMiles();
      liftWeights();
  }

  function exerciseRoutine(postRunActivity) {
      runFiveMiles();
      postRunActivity();
  }

  function Monday() {
      exerciseRoutine(() => console.log("Stretch! Work that core!"))
  }


//Lab

/**
 * The receivesAFunction function should:
 * take a callback function as an argument
 * call the callback function
 * it doesn't matter what this function returns, so long as it calls the callback function
 */

function checkUp() {
    console.log("Are you okay?")
}

function salamu() {
    console.log('Sasa,');
}
function receivesAFunction(init) {
    salamu();
    init();

}



function returnsANamedFunction() {
    return salamu;
}




const returnsAnAnonymousFunction = () => function() {
    console.log("Anonymous!")
}





console.log(receivesAFunction(checkUp))
console.log(returnsANamedFunction())

