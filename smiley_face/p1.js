//author: Tejvir Mann
//1.js, EMOJI FACE GAME


function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');  //set up sliders
  var slider1 = document.getElementById('slider1');
  slider1.value = 200;
  var slider2 = document.getElementById('slider2');
  slider2.value = 300;
  var slider3 = document.getElementById('slider3');
  slider3.value = 200;
  var slider4 = document.getElementById('slider4');
  slider4.value = 0;

  function draw_both(){ //call the draw shape functions
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    draw2();
    draw3();
    draw4();
    draw();
  }
  
  function draw4(){ //draw mouth
    var context = canvas.getContext('2d');
    var slider4_val = slider4.value;
    context.save();
    context.translate(slider4_val,0);
    context.rect(150,250,200,80);
    context.fillStyle = "purple";
    context.fill();
    
    context.beginPath(); 
    context.rect(165,260,170,60); 
    context.fillStyle = "pink";
    context.fill();
    context.restore();
  }
                 
  function draw3(){ //draw eyes
    var context = canvas.getContext('2d');
    var slider3_val = slider3.value;
    context.save();
    context.translate(0,slider3_val);
    context.beginPath();
    context.rect(185, 130, 20, 100)
    context.rect(280, 130, 20, 100)
    context.strokeStyle = "#black"; 
    context.fill()

    context.beginPath(); 
    context.restore();
  }
                  
                  
  function draw() { //draw tongue
    var context = canvas.getContext('2d');
    var slider1_val = slider1.value;
    function tongue(color) {
         context.beginPath();
         context.arc(250, 360, 50, 0, 2 * Math.PI, false);
         context.lineWidth = 3;
         context.fillStyle = color;
         context.fill();
         context.beginPath();
         context.fillStyle = color;
         context.rect(209,260,80,100); 
         context.closePath();
         context.fill();  
    }
    context.save();
    context.translate(slider1_val,0);
    tongue("pink");
    context.restore();
  }
                  
  function draw2() { //draw head
    var context = canvas.getContext('2d');
    var slider2_val = slider2.value;
    function head(color) {
      context.beginPath();
      context.fillStyle = color;
      context.arc(250, 250, 170, 0, 2 * Math.PI, false);
      context.fill(); 
    }
    context.save();
    context.translate(0, slider2_val);
    head("yellow");
    context.restore();
  }
              
  slider1.addEventListener("input",draw_both); //connects sliders 
  slider2.addEventListener("input",draw_both);
  slider3.addEventListener("input",draw_both);
  slider4.addEventListener("input",draw_both);
  slider5.addEventListener("input",draw_both);
  draw_both(); //call 'main'
                                         
 }
 window.onload = setup;  





      