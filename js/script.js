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
    fillColor: '#D2691E',
    strokeWidth: 0.2,
    strokeColor: 'black',
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
  var destination22 = Point.random().multiply(view.size);

  view.onMouseUp = function(event) {
    clic = !clic;
  }
  view.onFrame = function(event) {
    // Each frame, rotate the path by 3 degrees:
    var vector = destination.subtract(ok.position);
    var vector1 = destination1.subtract(pix1.position);
    var vector2 = destination2.subtract(pix2.position);
    var vector3 = destination3.subtract(pix3.position);
    var vector4 = destination4.subtract(pix4.position);
    var vector5 = destination5.subtract(pix5.position);
    var vector6 = destination6.subtract(pix6.position);
    var vector7 = destination7.subtract(pix7.position);
    var vector8 = destination8.subtract(pix8.position);
    var vector9 = destination9.subtract(pix9.position);
    var vector10 = destination10.subtract(pix10.position);
    var vector11 = destination11.subtract(pix11.position);
    var vector12 = destination12.subtract(pix12.position);
    var vector13 = destination13.subtract(pix13.position);
    var vector14 = destination14.subtract(pix14.position);
    var vector15 = destination15.subtract(pix15.position);
    var vector16 = destination16.subtract(pix16.position);
    var vector17 = destination17.subtract(pix17.position);
    var vector18 = destination18.subtract(pix18.position);
    var vector19 = destination19.subtract(pix19.position);
    var vector20 = destination20.subtract(pix20.position);
    var vector21 = destination21.subtract(pix21.position);
    var vector22 = destination22.subtract(pix22.position);

    if (clic == 1) {
      ok.position = ok.position.add(vector.divide(15));
      ok.content = Math.round(vector.length);
      pix1.position = pix1.position.add(vector1.divide(15));
      pix1.content = Math.round(vector1.length);
      pix2.position = pix2.position.add(vector2.divide(25));
      pix2.content = Math.round(vector2.length);
      pix3.position = pix3.position.add(vector3.divide(20));
      pix3.content = Math.round(vector3.length);
      pix4.position = pix4.position.add(vector4.divide(15));
      pix4.content = Math.round(vector4.length);
      pix5.position = pix5.position.add(vector5.divide(5));
      pix5.content = Math.round(vector5.length);
      pix6.position = pix6.position.add(vector6.divide(20));
      pix6.content = Math.round(vector6.length);
      pix7.position = pix7.position.add(vector7.divide(40));
      pix7.content = Math.round(vector7.length);
      pix8.position = pix8.position.add(vector8.divide(30));
      pix8.content = Math.round(vector8.length);
      pix9.position = pix9.position.add(vector9.divide(10));
      pix9.content = Math.round(vector9.length);
      pix10.position = pix10.position.add(vector10.divide(5));
      pix10.content = Math.round(vector10.length);
      pix11.position = pix11.position.add(vector11.divide(15));
      pix11.content = Math.round(vector11.length);
      pix12.position = pix12.position.add(vector12.divide(20));
      pix12.content = Math.round(vector12.length);
      pix13.position = pix13.position.add(vector13.divide(5));
      pix13.content = Math.round(vector13.length);
      pix14.position = pix14.position.add(vector14.divide(15));
      pix14.content = Math.round(vector14.length);
      pix15.position = pix15.position.add(vector15.divide(20));
      pix15.content = Math.round(vector15.length);
      pix16.position = pix16.position.add(vector16.divide(30));
      pix16.content = Math.round(vector16.length);
      pix17.position = pix17.position.add(vector17.divide(5));
      pix17.content = Math.round(vector17.length);
      pix18.position = pix18.position.add(vector18.divide(15));
      pix18.content = Math.round(vector18.length);
      pix19.position = pix19.position.add(vector19.divide(10));
      pix19.content = Math.round(vector19.length);
      pix20.position = pix20.position.add(vector20.divide(15));
      pix20.content = Math.round(vector20.length);
      pix21.position = pix21.position.add(vector21.divide(25));
      pix21.content = Math.round(vector21.length);
      pix22.position = pix22.position.add(vector22.divide(25));
      pix22.content = Math.round(vector22.length);
    } else {
      ok.position.x = 365;
      ok.position.y = 315;
      pix1.position.x = 365;
      pix1.position.y = 315;
      pix2.position.x = 395;
      pix2.position.y = 315;
      pix3.position.x = 365;
      pix3.position.y = 345;
      pix4.position.x = 395;
      pix4.position.y = 345;
      pix5.position.x = 335;
      pix5.position.y = 375;
      pix6.position.x = 365;
      pix6.position.y = 375;
      pix7.position.x = 395;
      pix7.position.y = 375;
      pix8.position.x = 425;
      pix8.position.y = 375;
      pix9.position.x = 335;
      pix9.position.y = 405;
      pix10.position.x = 365;
      pix10.position.y = 405;
      pix11.position.x = 395;
      pix11.position.y = 405;
      pix12.position.x = 425;
      pix12.position.y = 405;
      pix13.position.x = 335;
      pix13.position.y = 435;
      pix14.position.x = 425;
      pix14.position.y = 435;
      pix15.position.x = 395;
      pix15.position.y = 435;
      pix16.position.x = 365;
      pix16.position.y = 435;
      pix17.position.x = 365;
      pix17.position.y = 465;
      pix18.position.x = 395;
      pix18.position.y = 465;
      pix19.position.x = 365;
      pix19.position.y = 495;
      pix20.position.x = 395;
      pix20.position.y = 495;
      pix21.position.x = 365;
      pix21.position.y = 525;
      pix22.position.x = 395;
      pix22.position.y = 525;
    }
    if (vector.length < 5) {
      destination = Point.random().multiply(view.size);
      destination1 = Point.random().multiply(view.size);
      destination2 = Point.random().multiply(view.size);
      destination3 = Point.random().multiply(view.size);
      destination4 = Point.random().multiply(view.size);
      destination5 = Point.random().multiply(view.size);
      destination6 = Point.random().multiply(view.size);
      destination7 = Point.random().multiply(view.size);
      destination8 = Point.random().multiply(view.size);
      destination9 = Point.random().multiply(view.size);
      destination10 = Point.random().multiply(view.size);
      destination11 = Point.random().multiply(view.size);
      destination12 = Point.random().multiply(view.size);
      destination13 = Point.random().multiply(view.size);
      destination14 = Point.random().multiply(view.size);
      destination15 = Point.random().multiply(view.size);
      destination16 = Point.random().multiply(view.size);
      destination17 = Point.random().multiply(view.size);
      destination18 = Point.random().multiply(view.size);
      destination19 = Point.random().multiply(view.size);
      destination20 = Point.random().multiply(view.size);
      destination21 = Point.random().multiply(view.size);
      destination22 = Point.random().multiply(view.size);

    }
}
}
