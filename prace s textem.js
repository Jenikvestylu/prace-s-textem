function reverseString() {
    const inputText = document.getElementById('textInput').value;
    const reversedText = inputText.split('').reverse().join('');
    displayResult(reversedText);
}

function splitIntoLetters() {
    const inputText = document.getElementById('textInput').value;
    const lettersArray = inputText.split('');
    displayResult(lettersArray.join(', '));
}

function countWordOccurrences() {
    const inputText = document.getElementById('textInput').value;
    const wordToCount = document.getElementById('wordInput').value;
    const occurrences = inputText.toLowerCase().split(wordToCount.toLowerCase()).length - 1;
    displayResult(`Slovo "${wordToCount}" se v textu vyskytuje ${occurrences}x.`);
}

function replaceCharacters() {
    const inputText = document.getElementById('textInput').value;
    const target = document.getElementById('replaceInput').value;
    const replacement = prompt(`Zadejte náhradní text pro "${target}":`);
    const replacedText = inputText.replace(new RegExp(target, 'gi'), replacement);
    displayResult(replacedText);
}

function findTextPositions() {
    const inputText = document.getElementById('textInput').value;
    const searchText = document.getElementById('searchInput').value;
    const positions = [];
    let index = inputText.toLowerCase().indexOf(searchText.toLowerCase());

    while (index !== -1) {
        positions.push(index);
        index = inputText.toLowerCase().indexOf(searchText.toLowerCase(), index + 1);
    }

    displayResult(`Text "${searchText}" se nachází na pozicích: ${positions.join(', ')}`);
}

function displayResult(result) {
    document.getElementById('result').textContent = result;
}
