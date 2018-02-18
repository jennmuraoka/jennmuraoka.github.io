//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
  heading = e.webkitCompassHeading;
  alpha = e.alpha;
  if(e.webkitCompassHeading) {
    compassHeading = e.webkitCompassHeading;
      } else {
        compassHeading = e.alpha;
      }

/* none of these are done
labels are just so that you know where to look up
for locations!  */


// japan
if (compassHeading >= 350 || compassHeading < 30) {
  text_area.textContent = "始めまして、村岡。。。美佳？ジェン？アーヌ？　と申します。";
}
// euro
if (compassHeading >= 30 && compassHeading < 90) {
  text_area.textContent = "i want to go to you";
}
//minnesota
if (compassHeading >= 90 && compassHeading < 135) {
  text_area.textContent = "cold quiet wispy snow on the ground, suburban motorcycle ride, summer";
  }
// hawaii
if (compassHeading >= 205 && compassHeading < 270) {
  text_area.textContent = "e komo mai howzit braddah da sun wen come in bright today yeah";
}
// se sea??
if (compassHeading >= 270 && compassHeading < 350) {
  text_area.textContent = "???";
}

       //calls function to alter content based on heading
       // myOrientation();
     };

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);



//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){

            text_area.textContent = "empty compass";

	}
