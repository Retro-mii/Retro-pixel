window.onload = function() {

  var canvas = document.getElementById('myCanvas');

  paper.setup(canvas);

  var Path = paper.Path;

  

 var pix1 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [365, 315],
  });
  var pix2 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [395, 315],
  });
  var pix3 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [365, 345],
  });
  var pix4 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [395, 345],
  });
  var pix5 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [335, 375],
  });
  var pix6 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 375],
  });
  var pix7 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 375],
  });
  var pix8 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [425, 375],
  });
  var pix9 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [335, 405],
  });
  var pix10 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 405],
  });
  var pix11 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 405],
  });
  var pix12 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [425, 405],
  });
  var pix13 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [335, 435],
  });
  var pix14 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [425, 435],
  });
  var pix15 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 435],
  });
  var pix16 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 435],
  });
  var pix17 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [365, 465],
  });
  var pix18 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [395, 465],
  });
  var pix19 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [365, 495],
  });
  var pix20 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [395, 495],
  });
  var pix21 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: 'black',
    center: [365, 525],
  });
  var pix22 = new Path.Rectangle({
    size: [30, 30],
    point: (0),
	justification: 'center',
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: 'black',
    center: [395, 525],
  });

var ok = new Path.Rectangle({
    size: [30, 30],
	center: [200, 200],
	point: view.center,
	justification: 'center',
	fontSize: 30,
	fillColor: 'black'
});
var clic = 0;
var destination = Point.random() * view.size
function onMouseUp(event){
    clic=!clic;
}
function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	var vector = destination - ok.position;
    if(clic==0){
    ok.position += vector/30;
    ok.content = Math.round(vector.length);
    }
    if(vector.length <5){
        destination = Point.random() * view.size;
    }
}
}