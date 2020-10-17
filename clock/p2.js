function setup() { "use strict";
    var context = document.getElementById('myCanvas').getContext('2d');
    
                  
    function spin(){   
    var noow = new Date();
    var sec = noow.getMinutes();
    //context.save();
    //context.translate(30,30);
    //context.rotate(sec*10*Math.PI/180); 
    context.rotate(0.01);
    
    //context.save();
    //context.translate(30,30);
    context.save();
    function the_clock() {
    var now = new Date();
    //var context = document.getElementById('myCanvas').getContext('2d');
    context.save();
    context.clearRect(0, 0, 160, 160);
    context.translate(85, 85);
    context.scale(0.5, 0.5);
    context.rotate(-Math.PI / 2);
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.lineWidth = 7;
    context.lineCap = 'round';

    // Hours times
    context.save();
    for (var i = 0; i < 12; i++) {
      context.beginPath();
      context.rotate(Math.PI / 6);
      context.moveTo(100, 10);
      context.lineTo(120, 0);
      context.stroke();
    }
    context.restore();

    var sec = now.getSeconds(); //get the time!!!!!
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    context.fillStyle = 'black';

    // hours
    context.save();
    context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    context.lineWidth = 14;
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    // minutes
    context.save();
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(112, 0);
    context.stroke();
    context.restore();
   
    // seconds
    context.save();
    context.rotate(sec * Math.PI / 30);
    context.strokeStyle = '#D40000';
    context.fillStyle = '#D40000';
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(83, 0);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 20, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.arc(95, 0, 5, 0, Math.PI * 2, true);
    context.stroke();
    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.arc(0, 0, 20, 0, Math.PI * 2, true);
    context.fill();
    context.restore();

    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = 'purple';
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke();

    context.restore();

    window.requestAnimationFrame(the_clock);
  }


window.requestAnimationFrame(the_clock);
window.requestAnimationFrame(spin);
    }
 context.translate(100,100);
 context.save();
 //context.rotate(); 
 //context.rotate(Math.pi * 4);
window.requestAnimationFrame(spin);
    //spin();
}
window.onload = setup;

