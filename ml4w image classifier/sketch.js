let myClassifier;
let video;
let label = '';
let Rounded;
let myVoice = new p5.Speech();


function setup() {

  createCanvas(900, 800); 
  video = createCapture(VIDEO);
  video.size(900, 800);
  video.hide();
  
  fill ("red");
  textSize(48);

  myClassifier = ml5.imageClassifier('MobileNet', video, modelLoaded);
}


function modelLoaded() {
  myClassifier.classify(gotResults);
}

function gotResults(err, results) {
  if (err) console.error(err);
  //if (results) label = results[0].label;
  if (results) label = results[0].confidence;

  myClassifier.classify(gotResults);
  Rounded = Math.ceil(results[0].confidence * 100);
  //console.log(Rounded);

}

function draw() {
  image(video, 0, 0);
  textSize(140);
  text(Rounded, 10, 100); 
}
myVoice.speak(Rounded);