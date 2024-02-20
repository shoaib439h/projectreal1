
'use strict';
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=10;
let highscore=0;
document.querySelector('.number2').textContent='?';
document.querySelector('.score').textContent=score;
function updateHighscore() {
       highscore=highscore+10; 
       document.querySelector('.highscore').textContent = highscore; 
   }
document.querySelector('.check').addEventListener('click',function(){
    var guess=document.querySelector('.guess').value;
    console.log(guess);
   if(!guess){
  document.querySelector('.message').textContent='no number';
   }else if(guess==secretnumber){
       document.querySelector('.message').textContent='Correct Number';
       score=score+2;
       document.querySelector('.score').textContent=score;
       document.querySelector('body').style.backgroundColor='	#008000';
       updateHighscore();
   }else if(guess>secretnumber){
     if(score>0){
       document.querySelector('.message').textContent='too high';
       score--;
       document.querySelector('.score').textContent=score;
     }else{
       document.querySelector('.message').textContent='you lost the game';
       document.querySelector('.score').textContent=0;
}
   }else if(guess<secretnumber){
       if(score>1){
       document.querySelector('.message').textContent='too low';
       score--;
       document.querySelector('.score').textContent=score;
       }else{
              document.querySelector('.message').textContent='you lost the game';
              document.querySelector('.score').textContent=0;
       }
   }




})
document.querySelector('.again').addEventListener('click',function(){
    
       document.querySelector('.message').textContent='Start guessing..';
       document.querySelector('body').style.backgroundColor = '#000000';
       secretnumber = Math.trunc(Math.random() * 20) + 1;
       document.querySelector('.number2').textContent = '?';
       score = 10; 
      
       if(guess==secretnumber){
              document.querySelector('.message').textContent='Correct Number';
              score=score+2;
              document.querySelector('body').style.backgroundColor='	#008000';
             document.querySelector('.score').textContent = score;
        
             highscore *= 2; 
             
           document.querySelector('.highscore').textContent = highscore;
       }
       if(guess<secretnumber){
              document.querySelector('body').style.backgroundColor = '#000000'; 
       }
       if(guess>secretnumber){
              document.querySelector('body').style.backgroundColor = '#000000'; 
       }
})