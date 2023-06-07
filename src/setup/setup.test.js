let animals = ["elephant", "zebra", "bear", "tiger"];

// Runs before each test to eliminate redundant code
beforeEach(() => {
  console.log("BEFORE EACH");
  mockAnimals = [...animals];
});

describe("animals array", () => {
  it("should add animal to end of array", () => {
    mockAnimals.push("aligator");
    expect(mockAnimals[mockAnimals.length - 1]).toBe("aligator");
  });

  it("should add animal to start of array", () => {
    mockAnimals.unshift("monkey");
    expect(mockAnimals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(mockAnimals).toHaveLength(4);
  });
});
