let quote=[
    {
       qoute: '"Be yourself; everyone else is already taken."',
       Auther: 'Oscar Wilde'
    },
    {
        qoute: '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe. "',
        Auther: 'Albert Einstein'
     },
     {
        qoute: '"So many books, so little time."',
        Auther: 'Frank Zappa'
     },
     {
        qoute: '"A room without books is like a body without a soul."',
        Auther: 'Marcus Tullius Cicero'
     },
     {
        qoute: '"You know you are in love when you can not fall asleep because reality is finally better than your dreams."',
        Auther: 'Dr. Seuss'
     },
     {
        qoute: '"You have gotta dance like there is nobody watching,Love like you will never be hurt, Sing like there is nobody listening,And live like it is heaven on earth."',
        Auther: 'William W. Purkey'
     }
];
function displayqoute(){
let randomQuote = quote[Math.floor(Math.random()*quote.length)];
document.getElementById("quote").innerHTML= randomQuote.qoute;
document.getElementById("auther").innerHTML= randomQuote.Auther;

}