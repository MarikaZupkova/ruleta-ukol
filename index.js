const ruletNumber = Number(prompt("zadejte číslo hodu"))
let result

if (ruletNumber === 0) {
  result = "nula, zelená"
} else if ((ruletNumber >= 1 && ruletNumber <= 10) || (ruletNumber >= 19 && ruletNumber <= 28)) {
    if (ruletNumber % 2 === 0){
    result = "sudá, černá"
  } else {
    result = "lichá, červená"
  }
} else if ((ruletNumber <= 36)) {
  if (ruletNumber % 2 === 0){
    result = "sudá, červená"
  } else {
    result = "lichá, černá"
  }
} else {
  result = "neplatná hodnota"
}

document.body.innerHTML = `Váš hod je = ${result}.`
