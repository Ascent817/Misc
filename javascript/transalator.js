const dict = {
    A: "А",
    B: "Б",
    C: "Ц",
    D: "Д",
    E: "Е",
    F: "Ф",
    G: "Г",
    H: "Х",
    I: "И",
    J: "Ж",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "К",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    W: "В",
    X: "КС",
    Y: "Й",
    Z: "З",
    a: "а",
    b: "б",
    c: "ц",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "ж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "к",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "в",
    x: "кс",
    y: "й",
    z: "з"
}

let input = "Crack this code";

let output = Array.from(input).map((char) => {
    if (dict[char]) {
        return dict[char];
    } else {
        return char;
    }
}).join("");

console.log(output);