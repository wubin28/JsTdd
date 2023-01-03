describe("Using toBeExamMark() when good value expected", () => {

  test("Expect good value, pass if we get it", () => {
    expect(100).toBeExamMark();
    expect(50).toBeExamMark();
    expect(0).toBeExamMark();
  });

  test("Expect good value, fail if we don't get it", () => {
    // Uncomment one of the following tests.
    // expect(-1).toBeExamMark(); 
    // expect(101).toBeExamMark(); 
  });
});

describe("Using toBeExamMark() when bad value expected", () => {

  test("Expect bad value, pass if we get it", () => {
    // Uncomment one of the following tests.
    // expect(-1).not.toBeExamMark(); 
    // expect(101).not.toBeExamMark(); 
  });

  test("Expect bad value, fail if we don't get it", () => {
    expect(50).not.toBeExamMark();
  });
});

describe("Using toBeExamMark() for non-numeric value", () => {

  test("Fail if value is non-numeric", () => {
    // Uncomment one of the following tests.
    // expect("wibble").toBeExamMark(); 
    // expect("wibble").not.toBeExamMark(); 
  }); 
});

describe("Using toBeInRange()", () => {

  test("Pass if we get expected good/bad value", () => {
    expect(10).toBeInRange(10, 20); 
    expect(19).toBeInRange(10, 20); 
    expect(9).not.toBeInRange(10, 20); 
    expect(20).not.toBeInRange(10, 20); 
  });

  test("Fail if we get unexpected good/bad value", () => {
    // Uncomment one of the following tests.
    // expect(9).toBeInRange(10, 20); 
    // expect(20).toBeInRange(10, 20); 
    // expect(10).not.toBeInRange(10, 20); 
    // expect(19).not.toBeInRange(10, 20); 
  }); 
});