let n = 3279856543;
let divisors = [];
let t = Date.now();

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        divisors.push(i);
    }
}

console.log(divisors);
console.log(`Done in ${Date.now() - t}ms`);

if (divisors.length > 2) {
    console.log(`${n} is not prime`);
} else {
    console.log(`${n} is prime`);
}