class Atom {
    constructor(symbol, color, position) {
        this.symbol = symbol;
        this.color = color;
        this.position = position;
        this.velocity = new Point(0, 0);
        this.acceleration = new Point(0, 0);
        this.bonds = [];
        this.sprite = new Path.Circle(position, 10);
    }

    Update(atoms) {
        this.velocity += this.acceleration;
        this.velocity *= 0.7;
        this.position += this.velocity;

        this.sprite.position = this.position;
        this.sprite.fillColor = this.color;

        //collision detection
        for (let atom of atoms) {
            if (atom != this) {
                let distance = GetDistance(this.position, atom.position);

                if (distance < 150) {
                    atom.AddForce((this.position - atom.position) * (1 / distance ** 1.4) * -2);
                }
            }
        }

        for (let bond of this.bonds) {
            if (bond.length() > bond.idealBondLength) {
                this.AddForce((bond.center() - this.position).normalize() * 1.2);
            } else if (bond.length() < bond.idealBondLength) {
                this.AddForce((this.position - bond.center()).normalize() * 1.2);
            }
        }

        // keep in bounds
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -1;
        } else if (this.position.x > canvas.width) {
            this.position.x = canvas.width;
            this.velocity.x *= -1;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y *= -1;
        } else if (this.position.y > canvas.height) {
            this.position.y = canvas.height;
            this.velocity.y *= -1;
        }
    }

    AddForce(force) {
        this.acceleration = force;
        this.velocity += this.acceleration;
    }
}

class Bond {
    constructor(atom1, atom2) {
        this.atom1 = atom1;
        this.atom2 = atom2;
        this.sprite = new Path.Line(atom1.position, atom2.position);
        this.sprite.strokeColor = 'white';
        this.sprite.strokeWidth = 5;
        this.idealBondLength = 50;
    }

    Update() {
        this.sprite.firstSegment.point = this.atom1.position;
        this.sprite.lastSegment.point = this.atom2.position;
    }

    length() {
        return GetDistance(this.atom1.position, this.atom2.position);
    }

    center() {
        return (this.atom1.position + this.atom2.position) / 2;
    }
}

function GetDistance(p1, p2) {
    let y = p2.x - p1.x;
    let x = p2.y - p1.y;

    return Math.sqrt(x * x + y * y);
}

function FindClosestAtom(point, atoms) {
    let closestAtom = null;
    let closestDistance = Infinity;
    for (let atom of atoms) {
        let distance = GetDistance(point, atom.position);
        if (distance < closestDistance) {
            closestAtom = atom;
            closestDistance = distance;
        }
    }
    return closestAtom;
}

let Bondlayer = new Layer();
let Atomlayer = new Layer();

let lineGizmo = new Path({
    strokeColor: 'white',
    strokeWidth: 10,
});

let atoms = Array(100).fill().map((_, i) => {
    let position = new Point(Math.random() * canvas.width, Math.random() * canvas.height, 100);
    return new Atom('C', 'red', position);
});

Bondlayer.activate();

let bonds = [];

function onFrame(event) {
    for (let atom of atoms) {
        atom.Update(atoms);
    }

    for (let bond of bonds) {
        bond.Update();
    }
}

const context = {
    tryingToBond: false,
    selectedAtom: null
};

tool.onMouseDown = (event) => {
    let atom = FindClosestAtom(event.point, atoms);
    if (GetDistance(event.point, atom.position) < 20) {
        context.selectedAtom = atom;
        context.tryingToBond = true;
    }
};

tool.onMouseUp = (event) => {
    if (context.tryingToBond) {
        let atom = FindClosestAtom(event.point, atoms);
        if (GetDistance(event.point, atom.position) < 20) {
            // lineGizmo.segments = [context.selectedAtom.position, event.point];
            let bond = new Bond(context.selectedAtom, atom);
            bonds.push(bond);
            context.selectedAtom.bonds.push(bond);
            atom.bonds.push(bond);
            context.selectedAtom = null;
            context.tryingToBond = false;
        }
    }
};