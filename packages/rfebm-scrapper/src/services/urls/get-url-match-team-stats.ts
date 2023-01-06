import { ISQUAD_HANDBALL, ISQUAD_SEC, ISQUAD_TOKEN } from 'global-values';
import { rfebmUrlCreator } from './rfebm-url-creator';

export function getUrlMatchTeamStats(matchId: number, teamId: number) {
  return rfebmUrlCreator(ISQUAD_HANDBALL, `estadisticas_pdc.php`, {
    id: matchId,
    id_equipo: teamId,
    token: ISQUAD_TOKEN,
    sec: ISQUAD_SEC,
  });
}
