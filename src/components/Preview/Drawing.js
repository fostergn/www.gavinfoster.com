window.onload = function(){

  console.log('window loaded');

  var canvas = document.getElementById('canvas');
  var optionBlue = document.getElementById('options__color--blue');
  var optionBlack = document.getElementById('options__color--black');
  var optionFive = document.getElementById('options__size--five');
  var optionTen = document.getElementById('options__size--ten');
  var ctx = canvas.getContext("2d");
  var isMouseDown = false;
  var mouseX;
  var mouseY;
  var rectLeft = canvas.getBoundingClientRect().left;
  var rectTop = canvas.getBoundingClientRect().top;

  initDrawingLine(ctx);
  initOptions();

  canvas.addEventListener('mousemove', function(e){

    mouseX = e.clientX - rectLeft;
    mouseY = e.clientY - rectTop;

    if(mouseX && isMouseDown){
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
    } else {
      ctx.moveTo(mouseX,mouseY);
    }
  });

  canvas.addEventListener('mousedown', function(e){
    isMouseDown = true;
  });

  canvas.addEventListener('mouseup', function(e){
    isMouseDown = false;
  });

  function initOptions(){
    // options event listeners
    optionBlue.addEventListener('click', function(){
      setStrokeColor(ctx, 'blue');
    });
    optionBlack.addEventListener('click', function(){
      setStrokeColor(ctx, 'black');
    });
    optionFive.addEventListener('click', function(){
      setStrokeWidth(ctx, '5');
    });
    optionTen.addEventListener('click', function(){
      setStrokeWidth(ctx, '10');
    });
  }

};

function initDrawingLine(ctx){
  ctx.beginPath();
  ctx.lineWidth = "5";
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.strokeStyle = "green"; // Green path
}

function setStrokeColor(ctx, color){
  ctx.beginPath();
  ctx.strokeStyle = color;
}

function setStrokeWidth(ctx, size){
  ctx.beginPath();
  ctx.lineWidth = size;
}
