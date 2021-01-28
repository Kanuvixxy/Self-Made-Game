var form;
var database, user, playerCount = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  form = new Form();
  form.display();

  user = new UserData();
  user.getCount();
}

function draw() {
  background(255); 
  drawSprites();
}