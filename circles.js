let k=3;
let large;
let children=[];
let n=10;
let increase=0.0005

function setup(){

  createCanvas(800,800);
  large=new first(400,400,300,1);
  children[0]=large;
  for(let i=1;i<n;i+=1){
    children[i]=new circles(children[i-1],i)
  }

}


function draw(){

  background(0);
  children[0].show();
  children[0].update();
  for(let j=1;j<n;j+=1){
    children[j].show();
    children[j].update(children[j-1]);
  }
}




class first{

  constructor(x,y,rad,n){
      this.x=x;
      this.y=y;
      this.rad=rad;
      this.n=n;
      this.speed=pow(k,this.n-1);
      this.time=0;
      this.px=this.rad*cos(2*PI*this.time*this.speed);
      this.py=this.rad*sin(2*PI*this.time*this.speed);
  }

  show(){

      push();
      stroke(255);
      noFill();
      ellipse(this.x,this.y,this.rad*2);
      pop();
  }

  update(){
    this.time+=increase;
    this.px=this.rad*cos(2*PI*this.time*this.speed);
    this.py=this.rad*sin(2*PI*this.time*this.speed);
  }

  p(){
    push();
    stroke(255);
    strokeWeight(5);
    point(this.x+this.px,this.y+this.py);
    pop();
    }
}


class circles{

  constructor(parent,n){
    this.rad=parent.rad/2;
    this.time=0;
    this.n=n;
    this.speed=pow(k,n-1);
    this.x=parent.x+parent.px-this.rad*cos(2*PI*parent.speed*parent.time);
    this.y=parent.y+parent.py-this.rad*sin(2*PI*parent.speed*parent.time);
    this.px=this.rad*cos(2*PI*this.speed*this.time);
    this.py=this.rad*sin(2*PI*this.speed*this.time);

  }

  show(){
    push();
    stroke(255);
    noFill();
    ellipse(this.x,this.y,this.rad*2);
    pop();
  }

  update(parent){
    this.time+=increase;
    this.px=this.rad*cos(2*PI*this.speed*this.time);
    this.py=this.rad*sin(2*PI*this.speed*this.time);
    this.x=parent.x+parent.px-this.rad*cos(2*PI*parent.speed*parent.time);
    this.y=parent.y+parent.py-this.rad*sin(parent.time*2*PI*parent.speed);

  }
}
