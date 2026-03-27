const { Worker } = require('worker_threads');
let workers = [];

let range = 100000;
const THREADS = 100;

for (let i = 0; i < THREADS; i++) {
  let worker = new Worker("./pscWorker.js", { workerData: [(range / THREADS) * i, (range / THREADS) * (i + 1)] });
  workers.push(worker);
}

for (let worker of workers) {
  worker.on('message', (result) => {
    if (result[0] === "progress") {
      incTime();
    } else if (result[0] === "password") {
      console.log("\nPassword: " + result[1]);

      for (let worker of workers) {
        worker.terminate();
      }

      process.exit();
    } else {
      console.log("\nThread finished");
    }
  });
  worker.on("error", (msg) => {
    console.error(msg);
  });
}

// Drawing the Progress Bar Image
const drawProgressBar = (progress) => {
  const barWidth = 100;
  const filledWidth = Math.floor(progress / 100 * barWidth);
  const emptyWidth = barWidth - filledWidth;
  const progressBar = '█'.repeat(filledWidth) + '▒'.repeat(emptyWidth);
  return `[${progressBar}] ${progress}%`;
}

// Interval Setup
let currentProgress = 0;
const incTime = () => {
  currentProgress++;
  const progressPercentage = (currentProgress / 100000 * 100).toFixed(3) ; // Display 3 decimal places
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${drawProgressBar(progressPercentage)}`);
}