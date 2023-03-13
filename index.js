const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let thanks = []
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
  }

  return thanks;
}

console.log ["Guadalupe", "Ollie", "Aki"];
console.log(writeCards(names,));


let count = 10;
function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}
