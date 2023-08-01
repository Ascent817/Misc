const limit = [4, 4, 3, 4, 2, 4, 1];
let iter = 0;
let nums;
//             n  o  n  o  n  o  n
function calculate() {
  let a, b, c, d;
  a = parseInt(document.getElementById("24-a").value);
  b = parseInt(document.getElementById("24-b").value);
  c = parseInt(document.getElementById("24-c").value);
  d = parseInt(document.getElementById("24-d").value);

  nums = [a, b, c, d];

  let startPath = [];
  let used = [];
  iter = 0;
  perm(startPath, used);
}

function perm(path, used) {
  iter++;
  if (iter > 1536) {
    return;
  }
  if (path.length == 7) {
    let result = path[0];
    for (let i = 1; i < path.length; i+=2) {
      if (path[i] == 1) {
        result += path[i+1];
      } else if (path[i] == 2) {
        result -= path[i+1];
      } else if (path[i] == 3) {
        result *= path[i+1];
      } else {
        result /= path[i+1];
      }
    }

    console.log(path);
    console.log(result);

    if (result == 24) {
      let str = '';
      path.forEach((element, index) => {
        if (index % 2 == 0) {
          str += element;
        } else {
          if (element == 1) {
            str += ' + ';
          } else if (element == 2) {
            str += ' - ';
          } else if (element == 3) {
            str += ' × ';
          } else {
            str += ' ÷ ';
          }
        }
      });
      str += ' = 24';
      let p = document.createElement("p");
      p.innerHTML = str;
      document.getElementById('24-result').appendChild(p);
    }
    return;
  }

  if (path.length % 2 == 0) {
    // number
    for (let i = 0; i < 4; i++) {
      if (used.includes(i)) continue;
      perm([...path, nums[i]], [...used, i]);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      perm([...path, i], used);
    }
  }
}

document.getElementById("24-btn").addEventListener("click", calculate);