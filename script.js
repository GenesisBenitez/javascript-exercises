// Hello You!

// function hello(name) {
//     console.log(name);
//   }
//   let name = "Genesis Benitez";
//   console.log('Hello ' + name);

// Hello You! Part 2

//   function hello(){
//       console.log();
//   }
//   console.log('Hello, world!');

// Madlib

// function madlib(name, subject){
//     console.log(`${name} favorite subject in school is ${subject}`)
// }
// madlib("Genesis Benitez", "art");

// Tip Calculator

// function tipAmount(billAmount, levelOfService){
//     if(levelOfService === "good"){
//         console.log(billAmount * .2);
//     }else if(levelOfService === "fair"){
//         console.log(billAmount * .15);
//     }else if(levelOfService === "bad"){
//         console.log(levelOfService * .10)
//     }else{
//         console.log("please enter a valid value, good, fair or bad are acceptable level of service.")
//     }
// }
// tipAmount(100, 'fair');
// tipAmount(40, 'good');
// tipAmount(100, 'okay');

// Tip Calculator 2
// function tipAmount(billAmount, levelOfService){
//         if(levelOfService === "good"){
//             console.log((billAmount * .2) + billAmount);
//         }else if(levelOfService === "fair"){
//             console.log((billAmount * .15) + billAmount);
//         }else if(levelOfService === "bad"){
//             console.log((billAmount * .10) + billAmount)
//         }else{
//             console.log("please enter a valid value, good, fair or bad are acceptable level of service.")
//         }
//     }
//     tipAmount(100, 'fair');
//     tipAmount(40, 'good');
//     tipAmount(100, 'okay');

// Tip Calculator 3

function splitAmount(billAmount, levelOfService, partySize){
            if(levelOfService === "good"){
                console.log(((billAmount * .2) + billAmount) / partySize);
            }else if(levelOfService === "fair"){
                console.log(((billAmount * .15) + billAmount) / partySize);
            }else if(levelOfService === "bad"){
                console.log(((billAmount * .10) + billAmount) / partySize)
            }else{
                console.log("please enter a valid value, good, fair or bad are acceptable level of service.")
            }
        }
        splitAmount(100, 'fair', 5);
        splitAmount(40, 'good', 2);
        splitAmount(100, 'okay', 6);