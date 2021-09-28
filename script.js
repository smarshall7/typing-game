const quotes = [
    'When I shut my eyes and cover my ears, I feel like I could spend the rest of my life with her.',
    'If she was spice, she’d be flour.',
    'Kids are horrible. Why do we keep making them?',
    'Here\'s a bunch of numbers. It may look random but it’s my phone number.',
    'What kind of God would give you those legs and no rhythm?',
    'Uhhhhhhhhhh',
    'Dear Diary, how are you?'
  ];
  
const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');
const message = document.getElementById ('message');

let wordQueue;
let highlightPosition;
let startTime;  

function startGame() {
  console.log("game started!");
  
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[quoteIndex];
        
  wordQueue= quoteText.split(' ');
  quote.innerHTML= wordQueue.map(word => (`<span>${word}</span>`)).join ('');
  
  highlightPosition= 0;
  quote.childNodes[highlightPosition].className='highlight';
  
  input.focus();
  input.value ='';
  message.innerText = '';
  
  startTime= new Date().getTime();
  
  document.body.className = "";
    start.className = "started";
    setTimeout(() => { start.className = "button"; }, 2000);

}

function checkInput(){
  const currentWord=wordQueue[0]. replaceAll(".", "").replaceAll(",", "");
  const typedValue= input.value.trim();
  
  if(currentWord!==typedValue){
    input.className=currentWord.startsWith(typedValue)? "":"error";
    return;
  }
  
  wordQueue.shift(); //shift removes 0th element from array
  input.value=""; //empty textbox
  quote.childNodes[highlightPosition].className= ""; // unhighlight word
  
  if (wordQueue.length===0){ // if we have run out of words in the queue then game over.
    gameOver();
    return;
  }
  
  highlightPosition++;                                        // increment highlight position
  quote.childNodes[highlightPosition]. className="highlight"; //highlight new word
  
  }
  
function gameOver(){
  const elapsedTime= new Date().getTime()-startTime;
  document.body.classname= "winner";
  message.innerHTML= `<span class="Congratulations"!></span> <br> You finished in ${elapsedTime / 1000} seconds.`;
}


start.addEventListener ('click', startGame);
input.addEventListener ('input', checkInput);
