class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity=255;
   // this.image = loadImage("sprites/wood1.png");
  }
display(){
  fill ("pink");
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
