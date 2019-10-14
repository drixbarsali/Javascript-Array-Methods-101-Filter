const people = [
    {name:"Drix Barsali", age:37 },
    {name:"Thiago Beach", age:12 },
    {name:"Guild Lush", age:22 },
    {name:"Sidra Terrell", age:25 },
    {name:"Mercedes Garza", age:50 },
    {name:"Shayna Chase", age:34 }
]

//Filter
const adults =  people.filter(
    person=> person.age>=21
);

console.log(adults);

// RESULT SHOULD BE THIS
// [
//     { name: 'Drix Barsali', age: 37 },
//     { name: 'Guild Lush', age: 22 },
//     { name: 'Sidra Terrell', age: 25 },
//     { name: 'Mercedes Garza', age: 50 },
//     { name: 'Shayna Chase', age: 34 }
//   ]


const books = [
    {name:"Learn Javascript", pages:150, coverColor:"red"},
    {name:"Javascript is cool", pages:200, coverColor:"green"},
    {name:"Coding", pages:250, coverColor:"blue"},
    {name:"Me-coder", pages:350, coverColor:"green"},
    {name:"Clean Code", pages:79, coverColor:"yellow"},
    {name:"Tutorials 101", pages:81, coverColor:"red"},
    {name:"Let's Encrypt", pages:27, coverColor:"green"},
    {name:"SPA", pages:750, coverColor:"purple"},
    {name:"React", pages:268, coverColor:"green"}
]
//Filter
const booksOver100pagesGreenCover = books.filter(
  book=> book.pages >= 100 && book.coverColor === "green"
);

console.log(booksOver100pagesGreenCover);

// RESULT SHOULD BE THIS
// [
//     { name: 'Javascript is cool', pages: 200, coverColor: 'green' },
//     { name: 'Me-coder', pages: 350, coverColor: 'green' },
//     { name: 'React', pages: 268, coverColor: 'green' }
//   ]

const confirmed = [
    {name:"Drix Barsali"},
    {name:"Mercedes Garza" },
    {name:"Shayna Chase" }
]

const invited = [
    {name:"Drix Barsali", age:37, type:"VIP" },
    {name:"Thiago Beach", age:12, type:"Regular Invite" },
    {name:"Guild Lush", age:22, type:"VIP" },
    {name:"Sidra Terrell", age:25 , type:"Regular Invite"},
    {name:"Mercedes Garza", age:50, type:"Regular Invite" },
    {name:"Shayna Chase", age:34, type:"VIP" }
]

//Filter
var filteredConfirmed = invited.filter(
    person => confirmed.find(({name}) => person.name === name)
);

console.log(filteredConfirmed);

// RESULT SHOULD BE THIS
// [
//     { name: 'Drix Barsali', age: 37, type: 'VIP' },
//     { name: 'Mercedes Garza', age: 50, type: 'Regular Invite' },
//     { name: 'Shayna Chase', age: 34, type: 'VIP' }
//   ]

