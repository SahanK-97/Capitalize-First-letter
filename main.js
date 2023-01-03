function capitalizeWord(str){
    let words = str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}
console.log(capitalizeWord("I got up early today"))