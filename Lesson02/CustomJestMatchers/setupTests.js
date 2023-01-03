expect.extend( {

  // Simple Jest matcher.
  toBeExamMark(n) {
      
    if (typeof n !== "number") {
      throw new Error("Expected value to be a number");
    }

    if (n >= 0 && n <= 100) {
      return {
        pass: true, 
        message: () => `Expected ${n} not to be a valid exam mark`
      };
    }
    else {
      return {
        pass: false, 
        message: () => `Expected ${n} to be a valid exam mark`
      };
    }
  },

  // Parameterized Jest matcher.
  toBeInRange(n, min, max) {
      
    if (typeof n !== "number") {
      throw new Error("Expected value to be a number");
    }

    if (n >= min && n < max) {
      return {
        pass: true, 
        message: () => `Expected ${n} not to be in range [${min}, ${max})`
      };
    }
    else {
      return {
        pass: false, 
        message: () => `Expected ${n} to be in range [${min}, ${max})`
      };
    }
  }
});
