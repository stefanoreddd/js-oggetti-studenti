const studente = {
    nome: "Olivier",
    cognome: "Giroud",
    età: 36,
    peso: 93
};



for (let key in studente) {
    console.log(key + ": " + studente[key]);
}


let studenti = [
    {
        nome: "Sandro",
        cognome: "Tonali",
        età: 23,
        peso: 80
    },

    {
        nome: "Rafael",
        cognome: "Leao",
        età: 23,
        peso: 81
    },

    {
        nome: "Mike",
        cognome: "Maignan",
        età: 27,
        peso: 89
    },

    {
        nome: "Theo",
        cognome: "Hernandez",
        età: 25,
        peso: 81
    }
]


for (i = 0; i < studenti.length; i++){
    console.log("Nome: " + studenti[i].nome + ", Cognome: " + studenti[i].cognome);
}


function PrintStudents(){
    studenti.forEach(element =>{
        console.log(`
        ------------ ${element.nome} ------------
        \tNome: ${element.nome} 
        \tCognome: ${element.cognome}
        -----------------------------------------
        `)
    })
}

let insertName = prompt("Inserisci il nome dello studente: ");
let insertSurname = prompt("Inserisci il cognome dello studente: ");
let insertAge = prompt("Inserisci l'età dello studente");


let nuovoStudente = {
    nome: insertName,
    cognome: insertSurname,
    età: insertAge
}

studenti.push(nuovoStudente);


for (i = 0; i < studenti.length; i++){
    console.log("Nome: " + studenti[i].nome + ", Cognome: " + studenti[i].cognome);
}


function PrintStudents(){
    studenti.forEach(element =>{
        console.log(`
        ------------ ${element.nome} ------------
        \tNome: ${element.nome} 
        \tCognome: ${element.cognome}
        -----------------------------------------
        `)
    })
}