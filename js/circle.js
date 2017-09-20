// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
 

var canvas = document.getElementById('html');
 var context = canvas.getContext('2d');
 var x = canvas.width / 2;
 var y = canvas.height / 2;
 var radius = 75;
 var endPercent = 85;
 var curPerc = 0;
 var counterClockwise = false;
 var circ = Math.PI * 2;
 var quart = Math.PI / 2;

 context.lineWidth = 15;
 context.strokeStyle = '#ad2323';



 function animate(current) {
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.beginPath();
     context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
     context.stroke();
     
     context.font = "25px Arial";
     context.textBaseline = 'middle';
     context.textAlign = 'center';
     context.fillText(curPerc + '%', x, y);
     
     curPerc++;
     if (curPerc <= endPercent) {
         requestAnimationFrame(function () {
             animate(curPerc / 100);
         });
     }
 }

 animate();

var canvas2 = document.getElementById('css');
 var context2 = canvas2.getContext('2d');
 var x2 = canvas.width / 2;
 var y2 = canvas.height / 2;
 var radius2 = 75;
 var endPercent2 = 60;
 var curPerc2 = 0;
 var counterClockwise2 = false;
 var circ2 = Math.PI * 2;
 var quart2 = Math.PI / 2;

 context2.lineWidth = 15;
 context2.strokeStyle = '#28aae1';



 function animate2(current) {
     context2.clearRect(0, 0, canvas2.width, canvas2.height);
     context2.beginPath();
     context2.arc(x2, y2, radius2, -(quart2), ((circ2) * current) - quart2, false);
     context2.stroke();
     
     context2.font = "25px Arial";
     context2.textBaseline = 'middle';
     context2.textAlign = 'center';
     context2.fillText(curPerc2 + '%', x2, y2);
     
     curPerc2++;
     if (curPerc2 <= endPercent2) {
         requestAnimationFrame(function () {
             animate2(curPerc2 / 100);
         });
     }
 }

 animate2();
var canvas3 = document.getElementById('js');
 var context3 = canvas3.getContext('2d');
 var x3 = canvas3.width / 2;
 var y3 = canvas3.height / 2;
 var radius3 = 75;
 var endPercent3 = 50;
 var curPerc3 = 0;
 var counterClockwise3 = false;
 var circ3 = Math.PI * 2;
 var quart3 = Math.PI / 2;

 context3.lineWidth = 15;
 context3.strokeStyle = '#f0db4f';



 function animate3(current) {
     context3.clearRect(0, 0, canvas3.width, canvas3.height);
     context3.beginPath();
     context3.arc(x3, y3, radius3, -(quart3), ((circ3) * current) - quart3, false);
     context3.stroke();
     
     context3.font = "25px Arial";
     context3.textBaseline = 'middle';
     context3.textAlign = 'center';
     context3.fillText(curPerc3 + '%', x3, y3);
     
     curPerc3++;
     if (curPerc3 <= endPercent3) {
         requestAnimationFrame(function () {
             animate3(curPerc3 / 100);
         });
     }
 }

 animate3();