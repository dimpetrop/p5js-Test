function setup() {
	createCanvas(800, 600);
	// set background color
	background('#D66761');
  }
  function draw() {
	strokeWeight(2);
	noFill();
	// create the face ellipse
	ellipse(width/2,height/2,200,300);
	// for the left eye
	// draw the base ellipse for the eye, the sclera/“white of the eye”
	ellipse(350,275,50,25);
	// draw the Iris for the eye
	ellipse(350,275,25);
	// draw the center of the eye
	fill('black');
	ellipse(350,275,12.5);
	// for the right eye
	// draw the base ellipse for the eye, the sclera/“white of the eye”
	noFill();
	ellipse(450,275,50,25);
	// draw the Iris for the eye
	ellipse(450,275,25);
	// draw the center of the eye
	fill('black');
	ellipse(450,275,12.5);
	ellipse(400,275,2);
	strokeWeight(5);
	line(373,275,425,275); //glass line
	noFill();
	strokeWeight(3);
	rect(325,260,50,30); //glass left
	rect(425,260,50,30); //glass right
	strokeWeight(1);
	//hair
	line(380,110,400,150);
	line(420,110,400,150);
	line(405,110,400,150);
	line(391,115,400,150);
	line(398,120,400,150);


  }