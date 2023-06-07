const fetchData = require("./async");

describe("async", () => {
  it("should return correct todo using promises", () => {
    fetchData(1).then((todo) => {
      expect(todo.id).toBe(1);
    });
  });

  it("should return correct todo using async await", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});
