let score = 0;
const BAR_WIDTH = 40;
const subBlocks = [' ', '▏', '▎', '▍', '▌', '▋', '▊', '▉', '█'];

const Level = (score) => {
  let level = 0;
  let requirement = 1000;
  while (score - requirement > 0) {
    level++;
    score -= requirement;
    requirement = Math.round((requirement * 1.1) / 100) * 100;
  }

  return {
    level: level,
    score: Math.round(score),
    requirement: requirement,
    percentComplete: Math.round(ScaleBetween100(0, requirement, score))
  };
};

const ScaleBetween100 = (min, max, val) => {
  return ((val - min) / (max - min)) * 100;
}

const renderBar = (percent) => {
  const filled = (percent / 100) * BAR_WIDTH;
  const fullBlocks = Math.floor(filled);
  const remainder = filled - fullBlocks;
  const partialIndex = Math.round(remainder * 8);

  let bar = '█'.repeat(fullBlocks);
  if (fullBlocks < BAR_WIDTH) {
    bar += partialIndex > 0 ? subBlocks[partialIndex] : ' ';
    bar += ' '.repeat(BAR_WIDTH - fullBlocks - 1);
  }
  return `[${bar}]`;
};

for (let i = 0; i < Infinity; i += 0.1) {
  const lvl = Level(i);
  const bar = renderBar(lvl.percentComplete);
  const padScore = lvl.score.toString().padStart(lvl.requirement.toString().length);
  process.stdout.write(`\r${bar} Level: ${lvl.level}   ${padScore} / ${lvl.requirement}         `);
}