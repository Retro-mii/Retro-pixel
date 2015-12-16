window.onload = function() {

  var canvas = document.getElementById('myCanvas');

  paper.setup(canvas);

  var Path = paper.Path;

  var ctx = canvas.getContext("2d");

  var pix1 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [365, 315],
  });
  var pix2 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [395, 315],
  });
  var pix3 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
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
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [335, 375],
  });
  var pix6 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 375],
  });
  var pix7 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 375],
  });
  var pix8 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [425, 375],
  });
  var pix9 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [335, 405],
  });
  var pix10 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 405],
  });
  var pix11 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 405],
  });
  var pix12 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [425, 405],
  });
  var pix13 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [335, 435],
  });
  var pix14 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#D2691E',
    center: [425, 435],
  });
  var pix15 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [395, 435],
  });
  var pix16 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#EEE8AA',
    center: [365, 435],
  });
  var pix17 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [365, 465],
  });
  var pix18 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [395, 465],
  });
  var pix19 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [365, 495],
  });
  var pix20 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: '#696969',
    center: [395, 495],
  });
  var pix21 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: 'black',
    center: [365, 525],
  });
  var pix22 = new Path.Rectangle({
    size: [30, 30],
    point: (50),
    strokeWidth: 0.2,
    strokeColor: 'black',
    fillColor: 'black',
    center: [395, 525],
  });


    var size = new Size(30, 20);

  var posDepart = [pix1,pix2,pix3,pix4,pix5,pix6,pix7,pix8,pix9,pix10,pix11,pix12,pix13,pix14,pix15,pix16,pix17,pix18,pix19,pix20,pix21,pix22];
  var posOrigin = [pix1,pix2,pix3,pix4,pix5,pix6,pix7,pix8,pix9,pix10,pix11,pix12,pix13,pix14,pix15,pix16,pix17,pix18,pix19,pix20,pix21,pix22];
  var posDestination = [pix1,pix2,pix3,pix4,pix5,pix6,pix7,pix8,pix9,pix10,pix11,pix12,pix13,pix14,pix15,pix16,pix17,pix18,pix19,pix20,pix21,pix22];
  var clic = 0;
  var hitOptions = {
			segments: true,
			stroke: true,
			fill: true,
			tolerance: 0
		};
  function onMouseUp(event) {
			clic=!clic;
		}
  function onMouseMove(event) {
			if(clic==0){
				var hitResult = project.hitTest(event.point, hitOptions);
				if(hitResult && hitResult.type=="fill" && posDepart.indexOf(hitResult.item)<0){
					posDepart.push(hitResult.item);
					posOrigin.push(hitResult.item.position);
					posDestination.push( (Point.random() * view.size) - {x:(view.bounds.width/2)-((size.width * colSize.width)/2)-size.width,y:(view.bounds.height/2)-((size.height * colSize.width)/2)-size.height} );
				}
			}
		}
    function onFrame(event) {
			if(clic==0){
				for(i=0;i<posDepart.length;i++){
					var vector = posDestination[i] - posDepart[i].position;
					posDepart[i].position += vector / 20;
					if (vector.length < 6) {
						posDestination[i] = Point.random() * view.size;
					}
				}
			}
			else{
				for(i=0;i<posDepart.length;i++){
					var vector = posOrigin[i] - posDepart[i].position;
					posDepart[i].position += vector / 5;
				}
			}
		}
        project.activeLayer.position = view.center;
}
