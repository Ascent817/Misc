count = 0;

for (let i = 4; i < 24; i = i + 24) {
    IncrementCount();
}

console.log(count);

function IncrementCount() {
    count++;
}