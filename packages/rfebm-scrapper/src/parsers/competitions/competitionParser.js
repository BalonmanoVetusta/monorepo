import { selectOptions } from "lib/rfebm-parser/parser/selectOptions";

const COMPETITION_SELECTOR = "#competiciones";
const TOURNAMENT_SELECTOR = "#torneos";

export function competitionParser(document) {
  const competitions = selectOptions(document, COMPETITION_SELECTOR);
  const tournaments = selectOptions(document, TOURNAMENT_SELECTOR);

  const selectedCompetitionId = document
    .querySelector(`${COMPETITION_SELECTOR} > option:checked`)
    .getAttribute("value");

  const jsonData = { ...competitions };

  if (!selectedCompetitionId || !competitions[selectedCompetitionId]) {
    // This throw should never happen
    throw new Error("No competition selected or could not be found");
  }
  jsonData[selectedCompetitionId].tournaments = tournaments;

  return jsonData;
}
