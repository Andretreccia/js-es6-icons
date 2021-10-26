const allIcons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

//con un cilo aggiungere le card a schermo

/* allIcons.forEach((element, index, array) => {
    let iconColor = ""
    if (element.type == 'user') {
        iconColor = "purple"
    }
    else if (element.type == 'vegetable') {
        iconColor = "orange"
    }
    else if (element.type == 'animal') {
        iconColor = "blue"
    }
    let cardIcon = `<div class="card">
                        <i style="color: ${iconColor};"class="${element.family} ${element.prefix}${element.name}"></i>
                        <h6>${element.name}</h6>
                    </div>`
    //console.log(cardIcon)
    let rowCards = document.querySelector(".row");
    rowCards.innerHTML += cardIcon
}) */

/* Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

//selezionia il select nella DOM
let valueSelected = document.getElementById("filter")
//seleziona il contenitore nel quale stampare gli oggetti
let rowCards = document.querySelector(".row");

//aggiungiamo un eventListener per cambio del valore 
valueSelected.addEventListener("change", function () {

    //svuta il contenuto
    rowCards.innerHTML = ""

    //per ogni oggetto dell'array
    allIcons.forEach((element, index, array) => {
        //consizioni per il valore selezionato
        if (valueSelected.value == element.type || valueSelected.value == "all") {

            //variabile senza valore per il colore
        let iconColor = ""

        //condizioni per assegnare un valore colore alla variabile
        if (element.type == 'user') {
            iconColor = "purple"
        }
        else if (element.type == 'vegetable') {
            iconColor = "orange"
        }
        else if (element.type == 'animal') {
            iconColor = "blue"
        }

        //variabile con valore l'elemento da inserire nella DOM
        let cardIcon = `<div class="card">
                        <i style="color: ${iconColor};"class="${element.family} ${element.prefix}${element.name}"></i>
                        <h6>${element.name.toUpperCase()}</h6>
                    </div>`
        //console.log(cardIcon)

        //inserisci l'elemento
            rowCards.innerHTML += cardIcon
        }
    })

})




/* funzioni */



//funzione per stampare le card nella DOM
