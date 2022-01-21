// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare ain console la bici con peso minore utilizzando destructuring e template literal

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
// nomi e falli subiti e stampiamo tutto in console.
// BONUS
// Stampare in pagina oltre che in console!


// SNACK 1 

const displayElement = document.getElementById("display-first");

const bikeList = [
    {
        nome: "bianchi",
        peso: 5
    },
    {
        nome: "rossi",
        peso: 111
    },
    {
        nome: "verdi",
        peso: 22
    },
    {
        nome: "gustav",
        peso: 1
    }
];

let result = 0;
let message = "";

for (let i = 0; i < bikeList.length; i++) {
    const { peso } = bikeList[i];

    if (peso > bikeList[result].peso) {
        result = i;
    }
}

message += `La bici con il peso minore è la ${bikeList[result].nome}`
console.log(result);
console.log(message);

displayElement.innerText = message;






// SNACK 2 

const displayElementBottom = document.getElementById("display-second");
const displayElementThird = document.getElementById("display-third");


const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;

}

const teamList = [
    {
        nome: "manchester",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "liverpool",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "arsenal",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
]


// Versione con interpolazione stringhe 
let newTeamObject = "";

for (let i = 0; i < teamList.length; i++) {
    let { puntiFatti, falliSubiti } = teamList[i];

    puntiFatti = getRandomNumber(1, 30);
    falliSubiti = getRandomNumber(1, 50);
    teamList[i].puntiFatti = puntiFatti;
    teamList[i].falliSubiti = falliSubiti;
    console.log(puntiFatti);
    console.log(falliSubiti);

    console.log(teamList[i]);

    for (let key in teamList[i]) {
        newTeamObject += `<br> ${key}: ${teamList[i][key]}`;
    }
}



// Versione manipolazione dom 

// const newElement = document.createElement('div');
// for (let key in teamList[i]) {
//     newTeamObject = ` ${key}: ${teamList[i][key]}`;
//     newElement.append(newTeamObject);
//     newElement.classList.add("mb-2");
// }
// displayElementBottom.appendChild(newElement);
// }



let newArrayString = "";
const newArray = [];

for (let i = 0; i < teamList.length; i++) {
    const { nome } = teamList[i];
    const { falliSubiti } = teamList[i];
    const newObject = {
        nome: nome,
        falliSubiti: falliSubiti
    }

    newArray.push(newObject);

    for (let key in newObject) {
        newArrayString += `<br>${key}: ${newObject[key]}`;
    }
}

console.table(newArray);


displayElementBottom.innerHTML = `Gli oggetti con numeri random sono${newTeamObject}`;

displayElementThird.innerHTML = `i nuovi oggetti con solo il nome e i falli subiti è ${newArrayString}`;






// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe.

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const slicedArray = (a, b) => {
    const sliced = numList.slice(a, b);
    return sliced;
}

console.log(slicedArray(2, 4));

const indice = numList.filter((index) => {
    const slicedArr = slicedArray(5, 8);
    if (slicedArr.includes(index)) {
        return true;
    } else {
        return false;
    }

});

console.log(indice);

