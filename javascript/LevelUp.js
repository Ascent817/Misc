let score = 0;
const box = '█';
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

for (let i = 0; i < Infinity; i += 0.1) {
    let string = '[';
    for (let j = 0; j < 100; j++) {
        j <= Level(i).percentComplete ? string += box : string += ' ';
    }
    string += ']';
    process.stdout.write(`\r${string} Level: ${Level(i).level}   ${Level(i).score} / ${Level(i).requirement}         `);
}