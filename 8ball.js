
let answers = [
  'Unlikely',
  'Absolutely',
  'Try again',
  'You wish',
  'No',
  'Yes',
  'You\'re kidding right?',
  'Does a coder cry in the corner every night?',
  'In your dreams.',
  'Maybe.',
  'How I am supposed to know? I don\'t even exist.',
  'Absolutely..... not.',
  'Why would you ask me that?',
];

document.getElementById('questionButton').onclick = function(){
  // random answer generator
  let index = Math.floor(Math.random() * answers.length);
  // assinging answer to a value 
  let answer = answers[index]; 
  //prints the answer to the answerContainer on the HTML page 
    document.getElementById('answerContainer').innerHTML = answer;
  
  
};