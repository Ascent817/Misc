class PhysicsEntity {
    constructor(position, radius, color, attractionRadius, attractionCoefficients, type) {
        this.velocity = new Point(0, 0);
        this.acceleration = new Point(0, 0);
        this.radius = radius;
        this.color = color;
        this.representation = new Path.Circle(position, this.radius);
        this.representation.fillColor = this.color;
        this.attractionRadius = attractionRadius;
        this.attractionCoefficients = attractionCoefficients;
        this.type = type;
    }

    Update(particles) {
        this.acceleration = 0;
        this.velocity *= 0.99;
        this.representation.position += this.velocity;
        particles.forEach(particle => {
            if (particle != this) {
                let distance = getDistance(this.representation.position, particle.representation.position);

                if (distance < this.radius + particle.radius) {
                    let normal = (this.representation.position - particle.representation.position).normalize();
                    let dotProduct = this.velocity.dot(normal);
                    let response = normal * ((this.radius + particle.radius) - distance);


                    if (dotProduct > 0) {
                        this.velocity -= normal * dotProduct;
                    }

                    particle.representation.position -= response;

                } else if (distance < this.attractionRadius) {
                    this.AddForce((particle.representation.position - this.representation.position).normalize() * this.attractionCoefficients[particle.type] * 0.01 * (1 - distance / this.attractionRadius));
                }
            }
        });

        // Loop particles around the screen
        if (this.representation.position.x > canvas.width) {
            this.AddForce((this.representation.position - new Point(canvas.width / 2, canvas.height / 2)).normalize() * -0.7);
        } else if (this.representation.position.x < 0) {
            this.AddForce((this.representation.position - new Point(canvas.width / 2, canvas.height / 2)).normalize() * -0.7);
        }

        if (this.representation.position.y > canvas.height) {
            this.AddForce((this.representation.position - new Point(canvas.width / 2, canvas.height / 2)).normalize() * -0.7);
        } else if (this.representation.position.y < 0) {
            this.AddForce((this.representation.position - new Point(canvas.width / 2, canvas.height / 2)).normalize() * -0.7);
        }
    }

    AddForce(force) {
        this.acceleration = force;
    }
}

setInterval(() => {
    Tick();
}, 20);

function Tick() {
    particles.forEach(particle => {
        particle.Update(particles);
    });
}

function getDistance(p1, p2) {
    let y = p2.x - p1.x;
    let x = p2.y - p1.y;

    return Math.sqrt(x * x + y * y);
}