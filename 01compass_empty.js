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


// hawaii
    if (compassHeading >= 205 && compassHeading < 270) {
        text_area.textContent = "e komo mai howzit braddah da sun wen come in bright today yeah";
      }

// japan
      if (compassHeading >= 45 && compassHeading < 135) {
        text_area.textContent = "始めまして、";
        document.write("<br>");
        text_area.textContent = "村岡。。。美佳？ジェン？アーヌ？　と申します。";
      }
//minnesota
      if (compassHeading >= 135 && compassHeading < 225) {
        text_area.textContent = "熱い";
      }
// in between hawaii and japan
      if (compassHeading >= 225 && compassHeading <= 315) {
        text_area.textContent = "パラダイス";
      }

// in between hawaii and continental us (california?)
      if (compassHeading > 315 || compassHeading < 45) {
        text_area.textContent = "寒い";
      }
// in between california and minnesota
      if (compassHeading >= 45 && compassHeading < 135) {
        text_area.textContent = "帰場所";
      }
// in between minnesota and chicago
      if (compassHeading >= 135 && compassHeading < 225) {
        text_area.textContent = "熱い";
      }
// in between mn/chi and japan
      if (compassHeading >= 225 && compassHeading <= 315) {
        text_area.textContent = "パラダイス";
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
