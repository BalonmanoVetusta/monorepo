import { RFEBM_BASE_URL } from "constants";
import { rfebmUrlCreator } from "./rfebm-url-creator";

export function getUrlAllFederationTeams(federationId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `equipos.php`, {
    id_territorial: federationId,
  });
}
