export const printNumbersAsc = (n: number) => {
  if (n >= 0) {
    printNumbersAsc(n - 1);
    console.log(n);
  }
};



export const printNumbersDesc = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersDesc(n - 1);
  }
};
