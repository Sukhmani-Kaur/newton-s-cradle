class bob {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 70;
      
      
      
      World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        fill("red");
        strokeWeight(4);
        stroke("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
        
        
        
    
    }
  };
  