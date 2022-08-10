const lyrics = "tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte parini. kala kala shada shada."

// const doesExist = lyrics.includes('pakhi');


// const doesExist = lyrics.includes(searchString);
const searchString = 'Pakhi';
const lyricsLowercase = lyrics.toLowerCase()
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower);
// console.log(doesExist);



// one liner

const doesExistOneLiner = lyrics.toLowerCase().includes(searchString.toLowerCase())
// console.log(doesExistOneLiner);

// <<---------------------------------------------------------------->>

// use of indexOf()

// console.log(lyrics.indexOf('kala'));

if (lyrics.indexOf('shada')!==-1){
    // console.log("exists inside the string");
}
else{
    // console.log("does not exist in the string");
}

// <<---------------------------------------------------------------->>

// use of startsWith()
// console.log(lyrics.startsWith("Tumi"));
// console.log(lyrics.startsWith("tumi"));

// use of endsWith()

const fileName = 'myfile.pdf';
const otherFile = 'otherFile.png';
console.log(fileName.endsWith('.pdf'));
console.log(fileName.endsWith('.png'));

// <<---------------------------------------------------------------->>