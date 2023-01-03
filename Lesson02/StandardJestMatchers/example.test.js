describe("Matchers for equality", () => {

  test("toBe() compares using ===", () => {

    const a = 42;
    const b = 42

    expect(a).toBe(b);
    expect(a).not.toBe(21)
  });

  test("toBe() compares object identity", () => {

    const country1 = {
      name: "Wales",
      population: 3_136_000
    };

    const country2 = {
        name: "Wales",
        population: 3_136_000
    };

    expect(country1).toBe(country1);
    expect(country1).not.toBe(country2);
  });

  test("toEqual() compares object property values", () => {

    const country1 = {
      name: "Wales",
      population: 3_136_000
    };

    const country2 = {
        name: "Wales",
        population: 3_136_000
    };

    expect(country1).toEqual(country2);
  });

  test("toMatch() matches a string against an RE", () => {

    const message = "Oslo is in Norway";

    expect(message).toMatch("Norway");
    expect(message).toMatch(/norw../i);
    expect(message).not.toMatch(/norw../);
  });

  test("toMatchObject() matches object properties", () => {

    const carOnSale = {
      make: "Mazda",
      model: "CX30",
      fuelType: "hybrid",
      colour: "red"
    };

    const carDesired = {
        make: "Mazda",
        fuelType: "hybrid"
    };

    expect(carOnSale).toMatchObject(carDesired);
  });
});

describe("Matchers for range", () => {

  test("toBeLessThan() tests for <", () => {

    const a = 1.5;
    const b = 3.5;
    expect(a).toBeLessThan(b);

    const c = 123456789012345678901234567890n 
    const d = 123456789012345678901234567891n 
    expect(c).toBeLessThan(d);
  });

  test("toBeLessThanOrEqual() tests for <=", () => {

    const a = 1.5;
    expect(a).toBeLessThanOrEqual(1.6);
    expect(a).toBeLessThanOrEqual(1.5);

    const b = 12345n 
    expect(b).toBeLessThanOrEqual(12346n);
    expect(b).toBeLessThanOrEqual(12345n);
  });

  test("toBeGreaterThan() tests for >", () => {

    const a = 3.5;
    const b = 1.5;
    expect(a).toBeGreaterThan(b);

    const c = 123456789012345678901234567891n 
    const d = 123456789012345678901234567890n 
    expect(c).toBeGreaterThan(d);
  });

  test("toBeGreaterThanOrEqual() tests for >=", () => {

    const a = 3.5;
    expect(a).toBeGreaterThanOrEqual(3.4);
    expect(a).toBeGreaterThanOrEqual(3.5);

    const b = 12345n 
    expect(b).toBeGreaterThanOrEqual(12344n);
    expect(b).toBeGreaterThanOrEqual(12345n);
  });

  test("toBeCloseTo() tests for mathematical proximity", () => {
    
    const a = 10.12345;
    const b = 10.12348;

    expect(a).toBeCloseTo(b);
    expect(a).toBeCloseTo(b, 4);
    expect(a).not.toBeCloseTo(b, 5);
  });
});

describe("Matchers for null, undefined, or NaN", () => {

  test("toBeNull() tests for null", () => {

    const a = null;
    const b = 42;

    expect(a).toBeNull();
    expect(b).not.toBeNull();
  });

  test("toBeDefined() tests if a property is defined", () => {

    const person = {
        name: "Andy",
        age: 56
    };

    expect(person.name).toBeDefined();
  });

  test("toBeUndefined() tests if a property is undefined", () => {

    const person = {
      name: "Andy",
      age: 56
    };

    expect(person.companyJet).toBeUndefined();
  });

  test("toBeNaN() tests for NaN", () => {

    const a = Math.sqrt(-25);
    const b = Math.sqrt(25);

    expect(a).toBeNaN();
    expect(b).not.toBeNaN();
  });
});

describe("Matchers for truth or falsehood", () => {

  test("toBeTruthy() tests for truthy values", () => {
    
    const a = true;
    const b = 42;
    const c = 42n;
    const d = 3.14;
    const e = "Hello"
    const f = {};
    const g = [];

    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeTruthy();
    expect(d).toBeTruthy();
    expect(e).toBeTruthy();
    expect(f).toBeTruthy();
    expect(g).toBeTruthy();
  });

  test("toBeFalsy() tests for falsehood", () => {

    const a = false;
    const b = 0;     // or -0, 0n, -0n
    const c = 0.0;
    const d = "";
    const e = null;
    const f = undefined;
    const g = NaN;

    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeFalsy();
    expect(d).toBeFalsy();
    expect(e).toBeFalsy();
    expect(f).toBeFalsy();
    expect(g).toBeFalsy();
  });
});

describe("Matchers for object properties", () => {

  test("test for a length property", () => {

    const a = [10, 20, 30];
    const b = "abcd";
          
    expect(a).toHaveLength(3);
    expect(b).toHaveLength(4);
  });

  test("test for an object property using dot syntax", () => {

    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6" },
        pay: { salary: 10_000, bonus: 500 }
      }
    };
          
    expect(emp).toHaveProperty("benefits.car.make");
    expect(emp).toHaveProperty("benefits.car.model");
    expect(emp).not.toHaveProperty("benefits.jet");
  });

  test("test for an object property using array syntax", () => {

    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6" },
        pay: { salary: 10_000, bonus: 500 }
      }
    };
          
    expect(emp).toHaveProperty(["benefits", "car", "make"]);
    expect(emp).toHaveProperty(["benefits", "car", "model"]);
  });

  test("test for a object property that's an array elem", () => {

    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6" },
        pay: { salary: 10_000, bonus: 500 }
      },
      skills: ["JS", "TS", "C#"]
    };
          
    expect(emp).toHaveProperty(["skills", 0]);
    expect(emp).toHaveProperty(["skills", 1]);
  });

  test("test for an object property value", () => {

    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6" },
        pay: { salary: 10_000, bonus: 500 }
      },
      skills: ["JS", "TS", "C#"]
    };
          
    expect(emp).toHaveProperty("benefits.car.make", "Mazda");
    expect(emp).toHaveProperty(["benefits", "car", "model"], "6");
    expect(emp).toHaveProperty(["skills", 0], "JS");
  });
});

describe("Matchers for collections", () => {

  test("test for an item in an Array", () => {

    const p1 = {name: "Em", age: 24};
    const p2 = {name: "Tom", age: 24};
    const p3 = {name: "Jayne", age: 56};
    const p4 = {name: "Andy", age: 56};
    
    const people = [p1, p2, p3];

    expect(people).toContain(p1);
    expect(people).not.toContain(p4);
    expect(people).not.toContain({name: "Jayne", age: 56});
  });

  test("test for a value in an Array", () => {

    const p1 = {name: "Em", age: 24};
    const p2 = {name: "Tom", age: 24};
    const p3 = {name: "Jayne", age: 56};
    
    const people = [p1, p2, p3];

    expect(people).toContainEqual({name: "Jayne", age: 56});
    expect(people).not.toContain({name: "Jayne", age: 56});
  });

  test("test for a key in a Map", () => {

    const diallingCodes = new Map([
      ["SA", "+27"],
      ["NO", "+47"], 
      ["SG", "+65"] 
    ]);
    
    expect(diallingCodes.has("SG")).toBeTruthy();
    expect(diallingCodes.has("UK")).toBeFalsy();
  });

  test("test the value of an item in a Map", () => {

    const diallingCodes = new Map([
      ["SA", "+27"],
      ["NO", "+47"], 
      ["SG", "+65"] 
    ]);
    
    expect(diallingCodes.get("SG")).toBe("+65");
    expect(diallingCodes.get("UK")).toBeUndefined();
  });

  test("test for an item in a Set", () => {

    const countries = new Set()
      .add("SA")
      .add("NO")
      .add("SG")
          
    expect(countries.has("SG")).toBeTruthy();
    expect(countries.has("UK")).toBeFalsy();
  });
});

describe("Matchers for errors", () => {

  test("toThrow() tests if a function throws an error", () => {  

    const badFunc  = () => zzz + 1;
    const goodFunc = () => 2 + 2;

    expect(badFunc).toThrow();
    expect(goodFunc).not.toThrow();
  });
});



