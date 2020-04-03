var vals = ["AR","VR","AI"];
var counter = 0;
var elem = document.getElementById("text");
var inst = setInterval(change, 1000);

function change() {
    elem.innerHTML = vals[counter];
    counter++;
    if (counter >= vals.length) {
        counter = 0;
    }
}

var mouseXY = {};
    $( document ).on( "mousemove", function( event ) {
      mouseXY.X = event.pageX; 
      mouseXY.Y = event.pageY;
    });
    var iCow = $("#left");
    var prevXY = {X: null, Y: null};
    var cowInterval = setInterval(function(){
        if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
      
        var cowXY = iCow.offset();
        var diffX = cowXY.left - mouseXY.X;
        var diffY = cowXY.top  - mouseXY.Y;
        var tan = diffY / diffX;
        console.log(cowXY);
        console.log(mouseXY);
        var atan = Math.atan(tan)* 180 / Math.PI;
        console.log(atan);
        if(diffY > 0 && diffX > 0) {
        
            atan += 180; 
        }
        else if(diffY < 0 && diffX > 0) {
        
            atan -= 180;
        }
        
        prevXY.X = mouseXY.X;
        prevXY.Y = mouseXY.Y;
        iCow.css({transform: "rotate(" + atan + "deg)"});
    }
    }, 10);