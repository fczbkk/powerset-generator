import powerSetGenerator from "./index";

describe("powerSetGenerator", () => {
  it("should produce empty set", () => {
    const generator = powerSetGenerator()
    const result = [...generator]
    expect(result).toEqual([]);
  });

  it("should produce set with single item", () => {
    const generator = powerSetGenerator(["a"])
    const result = [...generator]
    expect(result).toEqual([["a"]]);
  });

  it("should produce set with multiple items", () => {
    const generator = powerSetGenerator(["a", "b", "c"])
    const result = [...generator]
    expect(result).toEqual([["a"], ["b"], ["c"], ["a", "b"], ["a", "c"], ["b", "c"], ["a", "b", "c"]]);
  });

  it("should limit the number of items", () => {
    const generator = powerSetGenerator(["a", "b", "c"], {maxResults: 5})
    const result = [...generator]
    expect(result).toEqual([["a"], ["b"], ["c"], ["a", "b"], ["a", "c"]]);
  });
});
