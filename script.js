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
let message = "SNACK 1 <br>";

for (let i = 0; i < bikeList.length; i++) {
    const { peso } = bikeList[i];

    if (peso > bikeList[result].peso) {
        result = i;
    }
}

message += `La bici con il peso minore è la ${bikeList[result].nome}`
console.log(result);
console.log(message);

displayElement.innerHTML = message;






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


displayElementBottom.innerHTML = `SNACK 2 <br> Gli oggetti con numeri random sono${newTeamObject}`;

displayElementThird.innerHTML = `i nuovi oggetti con solo il nome e i falli subiti è ${newArrayString}`;






// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe.


// SE HO UNA FUNZIONE DENTRO AD UN'ALTRA FUNZIONE POSSO PASSARE I PARAMETRI ANCHE ALLA FUNZIONE SUPERIORE PER USARE I PARAMETRI
// STESSI NELLA FUZIONE INFERIORE.
// SOPRATTUTTO SE LA FUNZIONE INFERIORE è COME IN QUESTO CASO UN FILTER O ALTRE FUNZIONI CHE PRENDONO IN COME PARAMETRI SOLO
// CERTI VALORI.
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isResult = (list, a, b) => {
    const filtered = list.filter((item, index) => {
        if (index >= a && index <= b) {
            return true;
        }
    });
    return filtered;
};

console.log(isResult(numList, 1, 8));







// SNACK 4
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
// 1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
// ES (marco de iulio => Marco de iulio);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


const students = [
    {
        id: 114,
        nome: "marco",
        somma: 75
    },
    {
        id: 561,
        nome: "giovanni",
        somma: 95
    },
    {
        id: 45,
        nome: "michela",
        somma: 47
    },
    {
        id: 893,
        nome: "giovanni    giacomo",
        somma: 84
    },
    {
        id: 110,
        nome: "gerardo",
        somma: 68
    },
];


// // Versione con ciclo senza metodi 
// const targhe = students.map((student) => {
//     const name = student.nome;
//     let string = name[0].toUpperCase();
//     let char = "";
//     for (let i = 1; i < name.length; i++) {
//         if (name[i - 1] === " ") {
//             char = name[i].toUpperCase();
//         } else {
//             char = name[i].toLowerCase();
//         }
//         string += char;
//     }

//     console.log(string);
//     return string;
// });


// Versione con metodi 
// ATTENZIONE CHE IN QUESTO CASO LIMITE LA NOTAZIONE CON LE [] E IL METODO CHARAT() SULLA STRINGA NON DANNO LO STESSO RISULTATO SE
//  IL CARATTERE è UNO SPAZIO VUOTO, LE [] DANNO UNDEFINED E INVECE IL CHARAT() RITORNA UNA STRINGA VUOTA.
const snack3Display = document.getElementById("display-4");

let snack3Msg = "SNACK 3 <br>";
const targhe = students.map((student, index) => {
    string = "";
    const name = student.nome;
    const splitted = name.split(" ");
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].substring(1).toLowerCase();
    }
    console.log(splitted);
    const joined = splitted.join(" ");
    console.log(joined);
    return joined;
});

snack3Display.innerHTML = `${snack3Msg}${targhe}`;





const snack4Display = document.getElementById("display-5");

let snack4Msg = "SNACK 4 <br>"
const up70 = students.filter((student) => {
    if (student.somma > 70) {
        return true;
    }
    return false;
});

console.log(up70);


let newStudent = "";
for (let i = 0; i < up70.length; i++) {
    newStudent += `Lo studente N${i + 1} è <br>`;
    for (let key in up70[i]) {
        newStudent += `${key}: ${up70[i][key]}<br>`;
    }
}

snack4Display.innerHTML = `${snack4Msg}${newStudent}`;



const snack5Display = document.getElementById("display-6");

const up120 = students.filter((student) => {
    if (student.somma > 70 && student.id > 120) {
        return true;
    }
    return false;
});

console.log(up120);

let newStudent120 = "";

for (let i = 0; i < up120.length; i++) {
    newStudent120 += `Lo studente N${i + 1} è <br>`;
    for (let key in up120[i]) {
        newStudent120 += `${key}: ${up120[i][key]}<br>`;
    }
}

snack5Display.innerHTML = `${newStudent120}`;
