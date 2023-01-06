import {
  RFEBM_AMBITO_ONE,
  RFEBM_BASE_URL,
  RFEBM_COURT_COMPETITIONS_SELECTION,
} from '../../constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlAllFederationClubs(federationId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `listado_clubs.php`, {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION,
    id_territorial: federationId,
    id_ambito: RFEBM_AMBITO_ONE,
  });
}
