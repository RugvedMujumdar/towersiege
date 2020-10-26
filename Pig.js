class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
   // this.image = loadImage("sprites/enemy.png");
   this.visiblity=255;
  }
  display(){
    
    fill ("lightblue");
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
};