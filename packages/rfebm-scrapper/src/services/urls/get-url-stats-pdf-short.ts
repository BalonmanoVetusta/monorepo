import { ISQUAD_HANDBALL, ISQUAD_SEC, ISQUAD_TOKEN } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlStatsPDFShort(matchId: number) {
  return rfebmUrlCreator(ISQUAD_HANDBALL, `estadisticas_pdc_pdf.php`, {
    id: matchId,
    token: ISQUAD_TOKEN,
    sec: ISQUAD_SEC,
  });
}
