import { RFEBM_BASE_URL, RFEBM_COURT_COMPETITIONS_SELECTION } from 'constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlSeasonPage(
  federationId: number = 9999,
  subfederationId: number = 9999,
  season: string | number
) {
  return rfebmUrlCreator(RFEBM_BASE_URL, 'competicion.php', {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION,
    id_territorial: federationId,
    id_ambito: subfederationId,
    id_temp: season,
  });
}
