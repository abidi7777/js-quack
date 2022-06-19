class Arithmethic {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mul(a, b) {
    return a * b;
  }

  static div(a, b) {
    if (b === 0) {
      throw new Error('cannot divide by zero.');
    }

    return a / b;
  }
}

// compiled code in Arithmetic.quack.js
