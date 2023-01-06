import { RFEBM_BASE_URL } from 'constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlAllFederationSportscenters(federationId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `pabellones.php`, {
    id_territorial: federationId,
  });
}
