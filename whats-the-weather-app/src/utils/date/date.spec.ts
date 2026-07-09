import { describe, it, expect } from "vitest";
import { shiftDate } from "./date";

describe("shiftDate", () => {
  it("should shift a date forward", () => {
    expect(shiftDate("2026-07-09", 3)).toBe("2026-07-12");
  });

  it("should shift a date backward", () => {
    expect(shiftDate("2026-07-09", -3)).toBe("2026-07-06");
  });

  it("should roll over into the next month", () => {
    expect(shiftDate("2026-07-30", 3)).toBe("2026-08-02");
  });

  it("should roll over into the next year", () => {
    expect(shiftDate("2026-12-30", 3)).toBe("2027-01-02");
  });

  it("should return the same date when the offset is 0", () => {
    expect(shiftDate("2026-07-09", 0)).toBe("2026-07-09");
  });
});
