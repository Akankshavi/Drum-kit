for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    /*here we have used an anonymous function as it doesn't have any name
    , we can also use the name of a normal function withour parentheses and
    then define that function*/
    /*addEventListener(1,2) takes 2 parameters the, when 1 is done execute 2,
    that is when something is   clicked excute our anonymous function, here what
    is to be clicked is defined by the querySelector*/
    playDrum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
/*Detecting keyboard press*/
document.addEventListener("keydown",function(event){
  playDrum(event.key);
  buttonAnimation(event.key);
  /*Here event gives us properties of what event triggered this function,
   the key attribute contains the name of the ket that was pressed*/
   /*The callback function creates an object that return the value only
   if the typeOfEvent that the programmer is looking for is same as the
   type of Event that has occured, and this callback function is not
    actually called by the user but by the object that experinced the vent*/
});
function playDrum(key){
  switch (key) {
    case "w":
      /*this refers to whatever is being currently clicked, or what triggered the fuction*/
      var audio = new Audio("sounds/crash.mp3");
      /*The above line creates an HTMLAudioElement that has a bunch of
       properties that can be changed and methods, that is stuff it can do,
      play() is one of its methods*/
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(key);


  }
}
function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100);
  /*We want it appear as an animation, that is the button should
  become translucent when we press it and then go back to its initial
   state after 100ms, so that it appears as an animation. This can be achieved
    by removing the class that gives the button it's translucent nature after 100ms.
    The setTimeout method takes 2 parametesr, the function that you want to be
    exceuted and after how many milliseconds*/
}
