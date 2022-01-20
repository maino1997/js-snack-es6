// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare ain console la bici con peso minore utilizzando destructuring e template literal

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// BONUS
// Stampare in pagina oltre che in console!


// SNACK 1 

const bikeList = [
    {
        nome: "bianchi",
        peso: 5
    },
    {
        nome: "rossi",
        peso: 11
    },
    {
        nome: "verdi",
        peso: 66
    },
    {
        nome: "gustav",
        peso: 1
    }
];

let result = 0;
let message = "";

for (let i = 0; i < bikeList.length - 1; i++) {
    const { peso } = bikeList[i];
    // const { nome } = bikeList[i];



    if (peso[i] < peso[i + 1]) {
        result = i;
    } else {
        result = i + 1;
    }


}

message += `La bici con il peso minore è la ${bikeList[result].nome}`
console.log(result);
console.log(message);



// SNACK 2 

