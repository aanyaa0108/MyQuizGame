var canvas;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  dislay()
  this.title.html('MyQuiz Game');
  this.title.position(350,0);

  this.question.html('question:- what starts and ends with the letter e , but has only one letter')
  this.question.position(150,80);
  this.option1.html('1:everyone');
  this.option1.position(150,100);
  this.option2.html('2:envelope');
  this.option2.position(150,120);


  this.input.position(150,230);

}

async ()
if(gameState === 0){
  constent = new constent();
  var constentCountRef = await database.ref('constantCount').once('value')
  if(constantCountRef.exists()){
    constantCount = constantCountRef.val();
    constant.getCount();
  }
  question = new Question();
  question.display();
}
















