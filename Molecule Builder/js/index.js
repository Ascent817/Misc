//#region Dictionaries
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
};

const endings = ["ane", "ene", "dyene"];

const substituents = {
  "chloro": "Cl",
  "bromo": "Br",
  "fluoro": "F",
  "iodo": "I",
  "nitro": "NO2",
  "nitroso": "NO",
  "hydroxy": "OH",
  "amino": "NH2",
  "amido": "NH",
  "carbonyl": "CO",
  "carboxy": "COOH",
  "phosphono": "PO3H2",
  "phosphino": "PO2H"
}
//#endregion

//#region Classes
class Substituent {
  constructor(chainNumber, substituentFormula, hydrocarbonLength = 0) {
    this.chainNumber = chainNumber;
    this.substituentFormula = substituentFormula;
    this.hydrocarbonLength = hydrocarbonLength;
  }
}
//#endregion

const IUPAC = '1,3-methyl-3-cyclopentadiene';

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

if (isRing && !isAromatic) {
  baseShapeSearchStart = IUPAC.indexOf('cyclo') + 5;
  let moleculeSpecs = SolveCyclic();
  console.log(moleculeSpecs);
  render = new Path.RegularPolygon(new Point(500, 500), moleculeSpecs.mainRing, 30);
} else {
  baseShapeSearchStart = IUPAC.lastIndexOf('-') + 1;
}

render.strokeColor = 'white';

function SolveCyclic() {
  let mainRing = 0;
  Object.keys(basePrefixes).forEach((key) => {
    if (IUPAC.substring(baseShapeSearchStart, IUPAC.length).startsWith(key)) {
      mainRing = basePrefixes[key];
    }
  });
  let substituents = [];
  return {
    mainRing: mainRing
  };
}