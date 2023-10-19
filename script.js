var plax = "./m/play.mp3"
var songOn = new Audio(plax)
function press() {
    var val = pad.value
    if (val % 3 == 0 && val % 5 == 0){
        hay.innerHTML = "FizzBuzz❤" 
        songOn.play()
    }
   else if(val % 3 == 0){
        hay.innerHTML = "Fizz✔"
    }
   else if (val % 5 == 0){
    hay.innerHTML = "Buzz😜"
   }
 else{
   hay.innerHTML = "This is neither fizz nor buzz 😒"
 }
}