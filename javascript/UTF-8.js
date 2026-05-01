const intToOctet = (integer) => ('00000000' + Number(integer).toString(2)).slice(-8);

/**
 * @param {number[]} data
 * @return {boolean}
 */
const validUtf8 = (data) => {
  // Convert integers from decimals to octet sequences
  let octetSeqs = "";
  data.forEach((integer) => {
    octetSeqs += intToOctet(integer);
  });

  // Find the number of 1s in the first byte of data
  let n = 1;
  while (octetSeqs[n] == "1") {
    n++;
  }

  // First validation checkpoint. If n is within valid bounds and a zero is placed correctly, proceed.
  if (n == 1) {
    // If n = 1, the entire string is only one byte and can be validated here.
    return octetSeqs[0] == "0" ? true : false;
  } else if (octetSeqs[n] != "0") {
    return false;
  }

  if (n > 4) {
    return false;
  }

  // Check whether n accurately describes the length of the data.
  if (octetSeqs.length != n * 8) {
    return false;
  }

  // n > 1 and first byte is valid. Check subsequent bytes for valididty.
  for (let i = 1; i < n; i++) {
    // Check the beginning of each new byte for a "10" string
    if (octetSeqs.substring(i * 8, i * 8 + 2) != "10") {
      return false;
    }
  }

  // Data has passed all checks.
  return true;
};

validUtf8([197, 130, 1]); // true
validUtf8([235, 140, 4]); // false