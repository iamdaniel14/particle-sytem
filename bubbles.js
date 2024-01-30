class Bubbles {
    constructor (x,y,sp){
       this.pos=createVector (x,y);
       this.vel=p5.Vector.random2D();
       this.acc=createVector (0,0);
       this.r=2;
       this.overlapping=false;
       this.col=0;
       this.view=150;
       this.max_speed=5;
       this.max_force=2;
    }
   
    
    flee (target){
       let x1=this.pos.x;
      let y1=this.pos.y;
      let x2=target.x;
      let y2=target.y;
      let xdist =x1-x2;
      let ydist =y1-y2;
      
      let d=sqrt (xdist*xdist+ydist*ydist);
       
      if (d<100){
       let angle=atan2(ydist,xdist); //culculating the angle from particle postion to mouse positon
       return this.seek(target).mult(-1);
    }
    }
    applyForce (force) {
      
      this.acc.add(force);
    }
      seek (target){
      let force=p5.Vector.sub(target,this.pos);
       force.setMag(this.max_speed);
       force.sub(this.vel)
      force.limit(this.max_force);
     return force;
    }
    
    move (){
      
      this.vel.add (this.acc);
      this.vel.limit(this.max_force)
      this.pos.add (this.vel);
      this.acc.set(0);
    }
    
    
     direction (mouse) {
      let x1=this.pos.x;
      let y1=this.pos.y;
      let x2=mouse.x;
      let y2=mouse.y;
      let xdist =x1-x2;
      let ydist =y1-y2;
      let d=sqrt (xdist*xdist+ydist*ydist);
       
        if (d<100){
          
          let angle=atan2(ydist,xdist); //calculating the angle from particle position to mouse position
          this.pos.x+=cos(angle);
          this.pos.y+=sin(angle);
        }
        
    }
    
    
    intersection (other,view,lineCheckbox,colorValue) {
      let x1=this.pos.x;
      let y1=this.pos.y;
      let x2=other.pos.x;
      let y2=other.pos.y;
      let xdist =x2-x1;
      let ydist =y2-y1;
      
      let d=sqrt (xdist*xdist+ydist*ydist);
        if (d<view){
          
          
      let w=map (d,0,150,0.5,0)
       strokeWeight (w);

  
       if (lineCheckbox.checked()){
        stroke(colorValue)
        line (this.pos.x,this.pos.y,other.pos.x,other.pos.y);
      }
       
       this.overlapping=true;
          
             
      this.col=255;
       return true;
        }
        
    }
    
      colorChange (other){
        
      this.col=0;
        
    }
    
       colorNormal(){
        
      this.col=255;
         
       }
    
    //checking the edges 
    
    edges (){
      
      if (this.pos.x>width-this.r || this.pos.x<this.r) {
        this.vel.x*=-1;
      } else  if ( this.pos.y>height-this.r || this.pos.y <this.r ) {
        this.vel.y*=-1;
        
      }
    }
    
    
    updateRadius(newRadius) {
        this.r=newRadius;
    
        }
    show (colorValue){
      
      push ();
      noStroke ();
      fill(colorValue)
      circle (this.pos.x,this.pos.y,this.r*2);
      
      pop();
    }

  }