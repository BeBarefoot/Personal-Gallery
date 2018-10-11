var gIdx = 1
var gProjs = [
    {id:gIdx++,
    name:'Book Store',
    title:'Just A Bookstore!',
    desc:'An interctive App for managing a bookstore',
    url:'../Day 20 - Book Store/index.html',
    cat:'App',
    img:'bookstore.jpg'
    },
    {id:gIdx++,
    name:'x and o',
    title:'X and O Game!',
    desc:'Best X and O game ever maybe',
    url:'https://github.com/BeBarefoot/X-O',
    cat:'App',
    img:'xo.png'
    },
    {id:gIdx++,
    name:'Book Store',
    title:'Just A Bookstore!',
    desc:'An interctive App for managing a bookstore',
    url:'../Day 20 - Book Store/index.html',
    cat:'App',
    img:''
    },
]


function getProj() {
    if (!localStorage.projs) return gProjs
    else return gProjs = JSON.parse(localStorage.getItem('projs'))
}

function createProj() {

}

function showModal(idx) {
    // $('#modal'idx).modal('show')
}