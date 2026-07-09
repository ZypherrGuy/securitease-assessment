export function getWeatherErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : "";

  if (/too short|uniquely identified/i.test(message)) {
    return "That location isn't specific enough. Try adding a region or country, e.g. \"Paris, France\".";
  }

  if (/not found|does not exist|invalid.*query/i.test(message)) {
    return "We couldn't find that location. Check the spelling and try again.";
  }

  if (/status 4\d\d|status 5\d\d/i.test(message)) {
    return "We couldn't find that location. Check the spelling or add a country.";
  }

  return "Something went wrong fetching the weather. Please try again.";
}
