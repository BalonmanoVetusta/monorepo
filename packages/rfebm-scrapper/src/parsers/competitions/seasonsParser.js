import { selectOptions } from "lib/rfebm-parser/parser/selectOptions";

const SEASON_SELECTOR = "#temporadas";

export function seasonsParser(document) {
  const seasons = selectOptions(document, SEASON_SELECTOR);
  return seasons;
}
