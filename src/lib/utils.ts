export function getWikipediaMobileUrl(url: string) {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export function yearHandler(year: string) {
  const currentYear = new Date().getFullYear();
  // if the value of year isn't valid set currentYear
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear);
  }
  return year;
}
