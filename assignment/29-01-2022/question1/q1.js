
var word = prompt("Enter the Word:");
var count = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] == "a" || word[i] == "A" || word[i] == "e" || word[i] == "E" || word[i] == "i" || word[i] == "I" || word[i] == "o" || word[i] == "O" || word[i] == "u" || word[i] == "U") {
        count = count + 1;
    }
}
alert("String Consist of  vowels are:" + count);