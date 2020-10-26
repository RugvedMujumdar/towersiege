class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.visiblity=255
   // this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    fill ("lightgreen");
    if(this.body.speed<5){
      super.display();
    }
  else{
   World .remove(world,this.body);
  push ();
  this.visiblity=this.visiblity-5;
  pop ();
  }
 
  }
  
}
