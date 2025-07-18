// condition - true
// if(condition){
//     //block of code
// }

// if(false){  // no output printed

//     console.log("Raju")
//     console.log("Praveen")
// }

// if(true){

//     console.log("Raju")
//     console.log("Praveen")
// }

// op - Raju
// Praveen

// if(false){

//     console.log("Raju")
//     console.log("Praveen")
// }

// else{
//     console.log("jamuna")
// } //based on the requirement you use //jamuna

// if(4>3){ // if true it executes only raju no other statements executed below
//     console.log("Raju")
// }
// else if("4"===4){
//     console.log("Praveen")

// }
// else if(true){
//     console.log("hello")

// }
// else{
//     console.log("All conditions failed")
// }

// if (3 > 5) {
//   // if in case failed it will go for second statement this passed now it prints only Praveen
//   console.log("Raju");
// } else if ("4" == 4) {
//   console.log("Praveen");
// } else if (true) {
//   console.log("hello");
// } else {
//   console.log("All conditions failed");
// }

// if (3 > 5) {
//   // if in case failed it will go for second statement this passed now it prints only Praveen this is also failing now it go 3rd statement
//   console.log("Raju");
// } else if ("4" === 4) {
//   console.log("Praveen");
// } else if (false) {
//   //now all failed then print else block all conditions failed
//   console.log("hello");
// } else {
//   console.log("All conditions failed");
// }

// switch()

switch ("Praveen") {
  case "Praveen":{
    console.log("Praveen here")
}
break; 
case "Sri":{
    console.log("Sri here")
    
}
break;
case "pramod":{
      console.log("Pramod here")
      
    }
    break;
    case "Sairo":{
      console.log("Sairo here")

  }
    break;
  case "Teja":{
    console.log("Teja here")
  }
    break;

  default:{
    console.log("No case matched")
  } //by default its similarly like else
    break;
}
