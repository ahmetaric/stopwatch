const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

const timerDisplay = document.getElementById("timerDisplay");
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
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
    milisecond = 0,second = 0,minute = 0,hour = 0;
    timerDisplay .innerHTML = "00 : 00 : 00 : 000";
})


function counter(){
  milisecond += 10;
  if(milisecond == 1000){
      milisecond = 0;
      second++;
      if(second == 60){
          second = 0;
          minute++;
            if(minute == 60){ 
                minute = 0;
                hour++;
            }
      }
  }

  timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${milisecond}`;
}