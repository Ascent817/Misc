// Dictionaries
const basePrefixes = {
  "meth": 1,
  "eth": 2,
  "prop": 3,
  "but": 4,
  "pent": 5,
  "hex": 6,
  "hept": 7,
  "oct": 8,
  "non": 9,
  "dec": 10,
  "undec": 11,
  "dodec": 12
};

const substituentPrefixes = {
  "di": 2,
  "tri": 3,
  "tetra": 4,
  "penta": 5,
  "hexa": 6,
  "hepta": 7,
  "octa": 8,
  "nona": 9,
  "deca": 10,
  "undeca": 11,
  "dodeca": 12
}

const IUPAC = '1,3-methyl-3-cyclohexadiene';

let isRing = false;
let isAromatic = false;
let render;

if (IUPAC.includes('cyclo')) {
  isRing = true;
} else if (IUPAC.includes('benzene')) {
  isRing = true;
  isAromatic = true;
}

let baseShapeSearchStart;

if (isRing) {
  baseShapeSearchStart = IUPAC.indexOf('cyclo') + 5;
} else {
  baseShapeSearchStart = IUPAC.lastIndexOf('-') + 1;
}

render = new Path.RegularPolygon(new Point(500, 500), 90, 30);
render.strokeColor = 'white';