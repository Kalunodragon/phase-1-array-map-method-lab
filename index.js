const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(splitAndCap)
  return tutorials, newTutorials
}
/*
function splitIntoWordsAndCap (array){
  let words = array.split(' ')
  for(let x = 0; x < words.length; x++){
    words[x] = words[x].charAt(0).toUpperCase() + words[x].slice(1)
  }
  let result = words.join(' ')
  return(result)
}
*/
function splitAndCap (array){
  let words = array.split(' ')
    let wordsMap = words.map(words =>
        words[0].charAt(0).toUpperCase() + words.slice(1))
      let result = wordsMap.join(' ')
  return result
}

