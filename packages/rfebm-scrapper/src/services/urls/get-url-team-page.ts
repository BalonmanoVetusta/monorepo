import { RFEBM_BASE_URL } from 'constants';
import { rfebmUrlCreator } from './rfebm-url-creator';

type TeamsPageParams = {
  id_equipo: number;
  id?: number;
};

export function getUrlTeamPage(teamId: number, tournamentId?: number) {
  const params: TeamsPageParams = {
    id_equipo: teamId,
  };

  if (tournamentId) {
    params.id = tournamentId;
  }

  return rfebmUrlCreator(RFEBM_BASE_URL, `equipo.php`, params);
}
