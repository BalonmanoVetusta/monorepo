import { RFEBM_BASE_URL } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlLiveReport(matchId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `acta.php`, { id_partido: matchId });
}
