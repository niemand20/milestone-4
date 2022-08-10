const lyrics = "tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte parini. kala kala shada shada."

const parts = lyrics.split(" ");
const sentence = lyrics.split(".");
// console.log(sentence);
// console.log(parts);

// character splitting
const  character = lyrics.split("");
// console.log(character)

// <<---------------------------------------------------------------->>

// slicing

const partial = lyrics.slice(5,8);
console.log(partial);
// substring
const partial2 = lyrics.substring(5,8);
console.log(partial2);

// <<---------------------------------------------------------------->>

// join

const lines = ["tumi bondhu kala pakhi ami jeno ki",
"bosonto kale tomay bolte parini","kala kala shada shada"
]

const newSong = lines.join(", ");
console.log(newSong);
