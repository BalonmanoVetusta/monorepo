import { RFEBM_BASE_URL } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlMatchReportPDF(matchId: number) {
  return rfebmUrlCreator(RFEBM_BASE_URL, `acta_completa_pdf.php`, {
    id_partido: matchId,
  });
}
