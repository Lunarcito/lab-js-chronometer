class Chronometer {
  constructor() {

    this.currentime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    let interval = setInterval (() => {

      this.currentime +=1;
      console.log(this.currentime)
      if (printTimeCallback){
        printTimeCallback();}
      },1000)
     
    }
   
  getMinutes() {
    let minutes = Math.floor(this.currentime / 60);
    console.log (minutes)
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor (this.currenttime% 60);
  return seconds
  }

  computeTwoDigitNumber(value) {

    if (value >=10){
      return value.toString()
    } else {
      return "0" + value
    }
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {

    this.currentime = 0
  }

  split() {

  let minutes = (this.computeTwoDigitNumber(this.getMinutes()))
  let seconds = (this.computeTwoDigitNumber(this.getSeconds()))
 return `${minutes} : ${seconds}`
}
}

const chronometer = new Chronometer ();


chronometer.start ()




setInterval (() => {
  chronometer.getMinutes()
}, 60000)
