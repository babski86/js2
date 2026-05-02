let num1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
let num11 = num1.flat();
let summmm = 0;
for (let i = 0; i < num11.length; i++) {
  summmm = summmm + num11[i];
}
console.log("sheni jami pirveli metodit aris: " + summmm);
let sum = 0;
for (let n = 0; n < num1.length; n++) {
  for (let i = 0; i < num1[n].length; i++) {
    sum = sum + num1[n][i];
  }
}
console.log("meore metodit aris: " + sum);
fullLength = 0;
for (let n = 0; n < num1.length; n++) {
  fullLength = fullLength + num1[n].length;
}
let sashualo = sum / fullLength;
console.log("sashualo pirveli metodit aris: " + sashualo);
let all =
  num1[0][0] +
  num1[0][1] +
  num1[0][2] +
  num1[0][3] +
  num1[0][4] +
  num1[1][0] +
  num1[1][1] +
  num1[1][2] +
  num1[1][3] +
  num1[1][4] +
  num1[2][0] +
  num1[2][1] +
  num1[2][2] +
  num1[2][3] +
  num1[2][4] +
  num1[3][0] +
  num1[3][1] +
  num1[3][2] +
  num1[3][3] +
  num1[3][4] +
  num1[4][0] +
  num1[4][1] +
  num1[4][2] +
  num1[4][3] +
  num1[4][4];
console.log("jami mesame metodit aris: " + all);
let average = sum / (num1[0].length + num1[1].length + num1[2].length + num1[3].length + num1[4].length);
console.log("sashualo meore metodit aris: " + average);

let num5 = [1, 2, 3, 4, 5];

let brd = 0;
for (let i = -1; i >= -num5.length; i--) {
  brd = brd + num5.at(i);
}
console.log("jami meotxe metodit aris: " + brd);
console.log("                                                                    axla filmebis droa");
const properties = {
  moviename: "The Lord of the Rings",
  genre: "Fantasy",
  streamingPlatform: "https://mykadri.tv/1058-the-lord-of-the-ringsthe-fellowship-of-the-ring.html",
  releaseYear: 2001,
  director: "Peter Jackson",
  mainActors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
};

console.log(
  "ფილმი " +
    properties.moviename +
    " არის  " +
    properties.genre +
    " ჟანრის და ყურება შეგიძლია ამ" +
    properties.streamingPlatform +
    " საითზე რომელიც გამოვიდა " +
    properties.releaseYear +
    " წელს . რეჟისორი: " +
    properties.director +
    " მთავარ როლებში: " +
    properties.mainActors.join(", "),
);
console.log("                                                                    bolo davaleba tomebi");
const tomi = [
  { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", yearpublished: 1954 },
  { title: "The Lord of the Rings: The Two Towers", author: "J.R.R. Tolkien", yearpublished: 1954 },
  { title: "The Lord of the Rings: The Return of the King", author: "J.R.R. Tolkien", yearpublished: 1955 },
];
console.log(
  "პირველი წიგნი არის: " +
    tomi[0].title +
    " ავტორი: " +
    tomi[0].author +
    " გამოყენებული წელი: " +
    tomi[0].yearpublished,
);
console.log(
  "მეორე წიგნი არის: " + tomi[1].title + " ავტორი: " + tomi[1].author + " გამოყენებული წელი: " + tomi[1].yearpublished,
);
console.log(
  "მესამე წიგნი არის: " + tomi[2].title + " ავტორი: " + tomi[2].author + " გამოყენებული წელი: " + tomi[2].yearpublished,
);
console.log("            igive ");
if (tomi.length > 0) {
  for (let i = 0; i < tomi.length; i++) {
    console.log(
      "წიგნი " +
        (i + 1) +
        " არის: " +
        tomi[i].title +
        " ავტორი: " +
        tomi[i].author +
        " გამოყენებული წელი: " +
        tomi[i].yearpublished,
    );
  }
  console.log("შემდეგი ნაწილი არარის გამოსული");
}
