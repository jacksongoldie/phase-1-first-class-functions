//Lab
function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    function namedFunction(){'hello'};
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){console.log("hello");}
}

/*day functions
function Monday() {
    exerciseRoutine(liftWeights);
  }
  
function Tuesday() {
    console.log(runFiveMiles());
    console.log("Swim 40 laps");
  }
  
function Wednesday() {
    exerciseRoutine(() => console.log("Stretch! Work that core!"));
  }
  
function Thursday() {
    console.log(runFiveMiles());
    console.log("Pump iron");
  }
  
function Friday() {
    console.log(runFiveMiles());
    console.log("Swim 40 laps");
  }
  
//action functions
function runFiveMiles() {
      console.log("Go for a five-mile run");
  }

function liftWeights() {
    console.log("Pump iron");
  }
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

//function that calls on a local parameter which calls back a function??
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  */