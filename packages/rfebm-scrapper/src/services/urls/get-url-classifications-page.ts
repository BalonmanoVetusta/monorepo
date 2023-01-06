import { RFEBM_BASE_URL } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

type CompetitionsParams = {
  id: number;
  jornada?: number;
};

export function getUrlClassificationsPage(
  competitionId: number,
  week?: number
) {
  const params: CompetitionsParams = {
    id: competitionId,
  };
  if (week) {
    params.jornada = week;
  }

  return rfebmUrlCreator(RFEBM_BASE_URL, `clasificacion.php`, params);
}
