export function maximoDivisor(num) {
    if (Number.isInteger(num / 4)) return 4;
    if (Number.isInteger(num / 2)) return 2;
    if (Number.isInteger(num / 3)) return 3;
    return 4;
  }