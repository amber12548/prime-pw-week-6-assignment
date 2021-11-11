let garage = [];
$ ( document ).ready ( addCar );
function addCar(){
  $ ( '#addCarButton' ).on( 'click', carFunction );
  $('li' ).mouseenter( liMouseEnter );
  $ ( 'li' ).mouseleave( liMouseLeave );
 }
/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/
function liMouseEnter(){
  $( this ).css( 'background-color', 'blue');
}
function liMouseLeave(){
  $( this ).css( 'background-color', 'white' )
}



function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar
console.log( newCar()); // in this problem we created an empty
//array named garage. We created a function that will add a new car to the garage with the given parameters
//Once the information is entered we will then push that information to be stored in the garage and return
// true once it has done so.
 console.log( garage );
 function carFunction (){
   let year = $( '#yearInput' ).val();
   let make = $( '#makeInput' ).val();
   let model = $( '#modelInput' ).val();
   newCar( year, make, model );
   //$('#carList').empty();
 for(let i = 0; i < garage.length; i++) {
     $('#carList').append(
          `<h2>${garage.year}</h2>
           <p>${garage.make} ${garage.model}</p>`
     );
 }
$( '#yearInput' ).val( '' );
$( '#makeInput' ).val( '' );
$( '#modelInput' ).val( '' );
}
//  }// created a new function to hold the year make and model of the
//  //cars that I want to add in the future.
