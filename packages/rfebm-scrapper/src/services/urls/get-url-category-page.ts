import { RFEBM_BASE_URL, RFEBM_COURT_COMPETITIONS_SELECTION } from 'constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlCategoryPage(
  federationId: number = 9999, // National federation by default
  subfederationId: number = 9999, // 9999 means show all but does not show subfederations competitions
  season: number,
  categoryId: number
) {
  return rfebmUrlCreator(RFEBM_BASE_URL, 'competicion.php', {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION,
    id_territorial: federationId,
    id_ambito: subfederationId,
    id_temp: season,
    id_categoria: categoryId,
  });
  // After this there are two different competitions select
  // 1st (competition): document.querySelector("#competiciones") // select wich value is the competitionId
  // 2nd (fase or group): document.querySelector("#torneos") // select wich value is the competitionId;
}
