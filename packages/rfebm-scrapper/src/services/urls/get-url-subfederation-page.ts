import { RFEBM_BASE_URL, RFEBM_COURT_COMPETITIONS_SELECTION } from 'constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlSubfederationPage(
  federationId: number = 9999, // National federation by default
  subFederationId: number = 0 // 0 means show all but does not show subfederations competitions
) {
  return rfebmUrlCreator(RFEBM_BASE_URL, 'competicion.php', {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION,
    id_territorial: federationId,
    id_ambito: subFederationId,
  });
}
