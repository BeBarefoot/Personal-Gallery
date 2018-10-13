var gIdx = 1
var gProjs = [{
        id: gIdx++,
        name: 'Book Store',
        title: 'Just A Bookstore!',
        desc: 'An interctive App for managing a bookstore',
        url: 'https://github.com/BeBarefoot/Book-Store',
        cat: 'App',
        img: 'bookstore.jpg',
        date: 'September 2018'
    },
    {
        id: gIdx++,
        name: 'x and o',
        title: 'X and O Game!',
        desc: 'Best X and O game ever maybe',
        url: 'https://github.com/BeBarefoot/X-O',
        cat: 'App',
        img: 'xo.png',
        date: 'June 2018'
    },
    {
        id: gIdx++,
        name: 'Guess Who',
        title: 'Guess Who game',
        desc: 'An interctive learning "Guess Who" game',
        url: 'https://github.com/BeBarefoot/Guess-Me-Game',
        cat: 'Game',
        img: 'guess.jpg',
        date: 'October 2018'
    },
    {
        id: gIdx++,
        name: 'To Do List',
        title: 'Manage Your Stuff',
        desc: `An online list managment experience like nothing you've ever experienced`,
        url: 'https://github.com/BeBarefoot/To-Do-List-Maker',
        cat: 'App',
        img: 'todo.jpg',
        date: 'October 2018'
    },
    {
        id: gIdx++,
        name: 'Touch The Numbers',
        title: 'Touch Some Numbers',
        desc: `If you're gonna touch somthing - touch numbers!`,
        url: 'https://github.com/BeBarefoot/To-Do-List-Maker',
        cat: 'Game',
        img: 'touch.jpg',
        date: 'September 2018'
    },
]


function getProj() {
    if (!localStorage.projs) return gProjs
    else return gProjs = JSON.parse(localStorage.getItem('projs'))
}


function showModal(idx) {
    $('#portfolioModal' + idx).modal('show')
}