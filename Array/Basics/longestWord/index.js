let words = ['app', 'ankle', 'agenda', 'apple', 'application', 'and', 'android', 'banana', 'lemon', 'watermelon', 'pomegranate', 'orange', 'cherry'];

// question: to find the longest word in the array

console.log(words.map(word => [word, word.length]).reduce((p, c) => p[1] > c[1] ? p : c)[0]);