import { RFEBM_AMBITO_ZERO, RFEBM_BASE_URL } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlFederationReferees(federationId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `listado_arbitros.php`, {
    id_territorial: federationId,
    id_ambito: RFEBM_AMBITO_ZERO,
  });
}
