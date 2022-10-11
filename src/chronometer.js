class Chronometer {
  constructor() {

    this.currentime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    setInterval (() => {

      this.currentime +=1;
        if (printTimeCallback){
        printTimeCallback();}
      },1000)
     
    }
   
  getMinutes() {
    let minutes = Math.floor(this.currentime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentime% 60;
  return seconds
  }

  computeTwoDigitNumber(value) {
    
    if (value <10){
      let test1 =`0${value}`
      return test1
     }
     return `${value}`
    
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {

    this.currentime = 0
  }

  split() {

  let minutes = this.computeTwoDigitNumber(this.getMinutes())
  let seconds = this.computeTwoDigitNumber(this.getSeconds())
  console.log (`${minutes} : ${seconds}`)
 return `${minutes} : ${seconds}`
}
}

const chronometer = new Chronometer ();


chronometer.start ()

setInterval (() => {
 chronometer.split()
}, 1000)
