import { describe, expect, it } from "vitest";
import { getLangColor, formatRepoName } from "../github";

describe("getLangColor", () => {
  it("returns the brand colour for known languages", () => {
    expect(getLangColor("TypeScript")).toBe("#3178c6");
    expect(getLangColor("Python")).toBe("#3572A5");
  });

  it("falls back to a neutral grey for unknown or null", () => {
    expect(getLangColor("Brainfuck")).toBe("#6b7280");
    expect(getLangColor(null)).toBe("#6b7280");
  });
});

describe("formatRepoName", () => {
  it("humanizes kebab/snake case into title case", () => {
    expect(formatRepoName("ai-doc")).toBe("Ai Doc");
    expect(formatRepoName("workout_tracker")).toBe("Workout Tracker");
    expect(formatRepoName("priceIQ")).toBe("PriceIQ");
  });
});
