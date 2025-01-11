export const checkPrime = (n) => {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag === true) {
    return "it is prime";
  } else {
    return "it not prime";
  }
};

export const displayPrimeSmaller1000 = () => {
  const isPrimes = [];
  const isNotPrimes = [];
  for (let i = 2; i < 1000; i++) {
    if (checkPrime(i)) {
      isPrimes.push(i);
    } else {
      isNotPrimes.push(i);
    }
  }
  return isPrimes;
};
