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

allIcons.forEach((element, index, array) => {
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
})


//PERCHÈ NON FUNZIONAVA??
/* //funzione per colorare
//selezionare tutti gli oggetti con chiave type
 allIcons.forEach((element) => {
    if (element.type == 'user') {
        let cardIconDOM = document.querySelectorAll(".color");
        cardIconDOM.classList.add("purple");
        document.querySelectorAll(".color").className += "purple"
    }
}) */
