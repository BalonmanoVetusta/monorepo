import { RFEBM_BASE_URL } from "constants";
import { rfebmUrlCreator } from "./rfebm-url-creator";

export function getUrlMatchInformationPage(
  matchId: number
) {
  return rfebmUrlCreator(RFEBM_BASE_URL, 'previo.php', {
    id_partido: matchId,
  });
}
