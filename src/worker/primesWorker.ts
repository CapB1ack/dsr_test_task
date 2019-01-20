export default () => {
  self.addEventListener('message', e => {
    if (e.data === 'START_CALCULATION') {
      const arrayWithPrimes = [2, 3];
      for (let numberAttempt = 5; numberAttempt <= 10000000; numberAttempt += 2) {
        if (arrayWithPrimes.every(prime => numberAttempt % prime !== 0)) {
          arrayWithPrimes.push(numberAttempt);
          if (arrayWithPrimes.length % 1000 === 0) {
            (postMessage as any)(numberAttempt);
          }
        }
      }
    }
  });
};