export function shiftDate(isoDate: string, offsetDays: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const shifted = new Date(year, month - 1, day + offsetDays);

  const y = shifted.getFullYear();
  const m = String(shifted.getMonth() + 1).padStart(2, "0");
  const d = String(shifted.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}
