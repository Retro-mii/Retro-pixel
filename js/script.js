paper.install(window);
window.onload = function() {


  paper.setup("myCanvas");

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
    point: [395, 525],
    fontSize: 30,
    fillColor: 'white'
  });

  var clic = 0;
  var destination = Point.random().multiply(view.size);
  var destination1 = Point.random().multiply(view.size);
  var destination2 = Point.random().multiply(view.size);
  var destination3 = Point.random().multiply(view.size);
  var destination4 = Point.random().multiply(view.size);
  var destination5 = Point.random().multiply(view.size);
  var destination6 = Point.random().multiply(view.size);
  var destination7 = Point.random().multiply(view.size);
  var destination8 = Point.random().multiply(view.size);
  var destination9 = Point.random().multiply(view.size);
  var destination10 = Point.random().multiply(view.size);
  var destination11 = Point.random().multiply(view.size);
  var destination12 = Point.random().multiply(view.size);
  var destination13 = Point.random().multiply(view.size);
  var destination14 = Point.random().multiply(view.size);
  var destination15 = Point.random().multiply(view.size);
  var destination16 = Point.random().multiply(view.size);
  var destination17 = Point.random().multiply(view.size);
  var destination18 = Point.random().multiply(view.size);
  var destination19 = Point.random().multiply(view.size);
  var destination20 = Point.random().multiply(view.size);
  var destination21 = Point.random().multiply(view.size);

  view.onMouseUp = function(event) {
    clic = !clic;
  }
  view.onFrame = function(event) {
    // Each frame, rotate the path by 3 degrees:
    var vector = destination.subtract(ok.position);
    if (clic == 0) {
      ok.position = ok.position.add(vector.divide(10));
      ok.content = Math.round(vector.length);
    } else {
      ok.position.x = 395;
      ok.position.y = 525;
    }
    if (vector.length < 5) {
      destination = Point.random().multiply(view.size);
    }

  // Each frame, rotate the path by 3 degrees:
  var vector1 = destination1.subtract(pix1.position);
  if (clic == 0) {
    pix1.position = pix1.position.add(vector1.divide(10));
    pix1.content = Math.round(vector.length);
  } else {
    pix1.position.x = 365;
    pix1.position.y = 315;
  }
  if (vector1.length < 5) {
    destination1 = Point.random().multiply(view.size);
  }
}
}
