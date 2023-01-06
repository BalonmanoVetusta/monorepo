import {
  RFEBM_BASE_URL,
  RFEBM_COURT_COMPETITIONS_SELECTION,
} from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlFederationPage(federationId: number = 9999) {
  // National federation by default
  return rfebmUrlCreator(RFEBM_BASE_URL, 'competicion.php', {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION,
    id_territorial: federationId,
  });
}
