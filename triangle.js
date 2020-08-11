class Triangle {
    constructor(x1,y1,x2,y2,x3,y3) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':1.0
      }
      this.body = Bodies.triangle(x1, y1, x2, y2, x3, y3, options);
      this.body.isStatic=true
      World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
    fill(255,25,25);
    triangle(this.body.position.x,this.body.position.y, this.body.position.x,this.body.position.y, this.body.position.x,this.body.position.y );
    
  }
};