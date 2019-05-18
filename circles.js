let circ=[];
let n=3;
function setup() {

  createCanvas(800,800);
  circ[0]= new parent(100,100,100,0)
  for(let i=1;i<n;i+=1){
    circ[i]=new child(circ[i-1],50-10*i,i);
  }
}



function draw(){

background(0);
translate(200,200)
for(j in circ){
  circ[j].show();
  circ[j].update(circ[j-1]);

}



}

class parent{

  constructor(x,y,rad,n){
    this.pos=createVector(x,y);
    this.n=n;
    this.r=rad;
    this.angle=0;
    this.px=this.r*cos(this.angle);
    this.py=this.r*sin(this.angle);
  }
  update(){
    this.angle-=0.01;
    this.px=this.r*cos(this.angle);
    this.py=this.r*sin(this.angle);
  }

  show(){
    push();
    noFill();
    stroke(255);
    translate(this.pos.x,this.pos.y);
    strokeWeight(1);
    ellipse(0,0,this.r*2);
    strokeWeight(8);
    point(this.px,this.py);
    pop();
  }

}

class child{

  constructor(parent,rad,n){
    this.pos=createVector(parent.px+parent.pos.x,parent.py+parent.pos.y);
    this.n=n;
    this.r=rad;
    this.angle=0.1*n;
    this.px=this.r*cos(this.angle);
    this.py=this.r*sin(this.angle);
  }

  update(parent){
    this.angle+=0.05*this.n;
    this.px=this.r*cos(this.angle);
    this.py=this.r*sin(this.angle);
    this.pos.set(parent.px+parent.pos.x,parent.py+parent.pos.y)
}

  show(){
    push();
    noFill();
    stroke(255);
    translate(this.pos.x,this.pos.y);
    strokeWeight(1);
    ellipse(0,0,this.r*2);
    strokeWeight(8);
    point(this.px,this.py);
    pop();
  }

}

function intergrate(){



}
