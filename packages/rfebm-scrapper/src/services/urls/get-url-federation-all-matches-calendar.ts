import { RFEBM_BASE_URL } from "constants";
import { rfebmUrlCreator } from "./rfebm-url-creator";

export function getUrlFederationAllMatchesCalendar(federationId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `partidos.php`, {
    id_territorial: federationId,
  });
}
