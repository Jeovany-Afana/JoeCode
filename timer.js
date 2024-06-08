
 class Timer
{
    constructor(element_id)
     {
        this.element_id= element_id;
this.timerInterval;
this.seconds = 0;
this.minutes = 0;
this.hours = 0;

 // Lier le contexte de "this" à la fonction updateTimer
 this.updateTimer = this.updateTimer.bind(this);
     }
     

startTimer() {
  this.timerInterval = setInterval(this.updateTimer, 1000);

}

updateTimer() {
  this.seconds++;

  document.getElementById(this.element_id).innerHTML = String(this.seconds).padStart(2,'0')+" s";
}

stopTimer() {
  clearInterval(this.timerInterval);
  
}

resetTimer() {
  clearInterval(this.timerInterval);
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  document.getElementById(this.element_id).innerText = '00';
}
}


