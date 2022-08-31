class Particle {
  constructor(position, radius, color, attractionRadius) {
    this.position = position;
    this.velocity = new Point(0, 0);
    this.acceleration = new Point(0, 0);
    this.radius = radius;
    this.color = color;
    this.representation = new Path.Circle(this.position, this.radius);
    this.representation.fillColor = this.color;
    this.attractionRadius = attractionRadius;
  }

  Update(particles) {
    particles.forEach(particle => {
      if (particle != this) {
        if (this.position.getDistance(particle.position) < this.attractionRadius) {
          this.AddForce(particle.position - this.position);
          this.position += this.velocity;
        }
      }
    });
  }

  AddForce(force) {
    this.acceleration = force;
    this.velocity += this.acceleration;
  }
}
 
const particles = new Array(80).fill(0).map(() => {
  return new Particle(new Point(Math.random() * canvas.width, Math.random() * canvas.height), 10, 'black', 100);
});

setInterval(() => {
  Tick();
}, 100);

function Tick() {
  console.log('tick');
  particles.forEach(particle => {
    particle.Update(particles);
  });
}

function getDistance(x1, y1, x2, y2){
  let y = x2 - x1;
  let x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
}