function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function  div(a,b) {
    return a / b;
}
function mult(a,b) {
    return a * b;
}

let arr1 = (1, 2, 3, 4, 5)
let arr2 = (6, 7, 8, 9, 10)

let ats = document.getElementById('ats');
   for (let i = 0; i < arr1.lenght; i++) {
       for (let i = 0; < arr2.lenght; i++)
       {
    ats.innerHTML += 'Skaiciu' + arr1[i] + ' ir ' + arr2[i] + ' sudetis yra ' + add(arr1[i], arr2[j]) + '<br>';
    ats.innerHTML += 'Skaiciu' + arr1[i] + ' ir ' + arr2[i] + ' atimtis yra ' + sub(arr1[i], arr2[j]) + '<br>';
    ats.innerHTML += 'Skaiciu' + arr1[i] + ' ir ' + arr2[i] + ' daugyba yra ' + mult(arr1[i], arr2[j]) + '<br>';
    ats.innerHTML += 'Skaiciu' + arr1[i] + ' ir ' + arr2[i] + ' dalyba yra ' + div(arr1[i], arr2[j]) + '<br>';
}

       let zenklas = "=";
       switch (zenklas) {
           case "+":
               add(/* ... */)
               break;
           case "-":
               sub(/* ... */)
               break;
           case "*":
               mult(/* ... */)
               break;
           case"/":
               div(/* ... */)
               break;
           default:
               console.log("Nepavyko");
               break;
       }

