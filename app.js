const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

const timerDisplay = document.getElementById("timerDisplay");
let milisecond = 0;
let second = 0;
let minute = 0;
let loop;
start.addEventListener("click", () => {
    
    clearInterval(loop);
    loop = setInterval(counter,10)
})

pause.addEventListener("click", () => {

     clearInterval(loop);
})

reset.addEventListener ("click", () => {
    clearInterval(loop);
    milisecond = 0,second = 0,minute = 0;
    timerDisplay .innerHTML = "00 : 00 : 00 ";
})


function counter(){
  milisecond += 1;
  if(milisecond == 100){
      milisecond = 0;
      second++;
      if(second == 60){
          second = 0;
          minute++;
        
      }
  }
  let ms = milisecond < 10 ? `0${milisecond}`: milisecond;
  let s = second < 10 ? `0${second}` : second;
  let m = minute < 10 ? `0${minute}` : minute;
  timerDisplay.innerHTML = `${m} : ${s} : ${ms}`;
}