import { RFEBM_BASE_URL } from "../global-values/index.js";

function selectOptions(document, querySelector) {
  const select = document.querySelector(querySelector).children;

  const selectObject = {};

  select.forEach((federation) => {
    const id = Number(federation.getAttribute("value"));
    const label = federation.textContent;

    selectObject[id] = { id, label };
  });

  return selectObject;
}

function log(...args) {
  args.forEach((arg) => console.log(JSON.stringify(arg, null, 2)));
}

const ALL_WEEKS_SELECTOR = "div.lista_jornadas.noprint > div";
const CURRENT_WEEK_SELECTOR = "div.pull-right.titulo_jornadas > h4 > div";
const TABLE_SELECTOR = "div.table-responsive > table";

export function parseCurrentWeek(document) {
  const currentWeekElement = document.querySelector(CURRENT_WEEK_SELECTOR);
  const currentWeekText = currentWeekElement.textContent;
  const currentWeek = Number(currentWeekText.match(/\d+/)[0]);
  const currentWeekDate = currentWeekText.match(/\d+\-\d+\-\d+/)[0];
  return { currentWeek, currentWeekDate };
}

function parseHowManyWeeks(document) {
  const allWeeksElement = document.querySelectorAll(ALL_WEEKS_SELECTOR);
  let total = 0;

  for (const week of allWeeksElement) {
    log(week.textContent);
    if (week.textContent.match(/^\d+$/)) {
      total++;
    }
  }

  return total;
}

function parseLocalTeamData([localShieldColumn, , teamsColumn, scoreColumn]) {
  const [localScore] = scoreColumn.textContent.split("-");

  const localTeamLink = localShieldColumn.querySelector("a").href;
  const localTeamUrl = new URL(`${RFEBM_BASE_URL}/${localTeamLink}`);
  const localTeamId = Number(localTeamUrl.searchParams.get("id_equipo"));
  const localTeam = {
    id: localTeamId,
    localTeamUrl,
    shield: localShieldColumn.querySelector("img").src,
    name: teamsColumn
      .querySelector(`a[href="${localTeamLink}"]`)
      .textContent.trim(),
    score: localScore,
  };
  return localTeam;
}

function parseVisitorTeamData([
  ,
  visitorShieldColumn,
  teamsColumn,
  scoreColumn,
]) {
  const [, visitorScore] = scoreColumn.textContent.split("-");

  const visitorTeamLink = visitorShieldColumn.querySelector("a").href;
  const visitorTeamUrl = new URL(`${visitorTeamLink}`, RFEBM_BASE_URL);
  const visitorTeamId = Number(visitorTeamUrl.searchParams.get("id_equipo"));
  const visitorTeam = {
    id: visitorTeamId,
    visitorTeamUrl,
    shield: visitorShieldColumn.querySelector("img").src,
    name: teamsColumn
      .querySelector(`a[href="${visitorTeamLink}"]`)
      .textContent.trim(),
    score: visitorScore,
  };

  return visitorTeam;
}

function parsePlace([, , , , , placeColumn]) {
  const name = placeColumn.textContent.trim();
  const mapsUrl = new URL(placeColumn.querySelector("a").href);
  const [latitude, longitude] = mapsUrl.searchParams.get("q").split(",");
  return { name, mapsUrl, latitude, longitude };
}

function parseMatchId([, , , , , , , previousColumn]) {
  const onclick = previousColumn.querySelector("a").getAttribute("onclick");
  const matchId = onclick.match(/mostrarPrevio\((\d+)\)/)?.[1] ?? null;
  return matchId;
}

function parseRow(row) {
  const columns = row.querySelectorAll("td");
  const [
    localShieldColumn,
    visitorShieldColumn,
    teamsColumn,
    scoreColumn,
    dateColumn,
    placeColumn,
    tvColumn, // tv Column is Always empty
    previousColumn,
    streamingLinkColumn,
    liveColumn,
    liveDataColumn,
    statsColumn,
    statusColumn,
    reportColumn,
  ] = columns;

  const status = statusColumn.textContent;
  const localTeam = parseLocalTeamData(columns);
  const visitorTeam = parseVisitorTeamData(columns);
  const place = parsePlace(columns);
  const matchId = parseMatchId(columns);

  return {
    matchId,
    status,
    localTeam,
    visitorTeam,
    place,
    streamingLinkColumn,
  };
}

export function resultsParser(document) {
  const table = document.querySelector(TABLE_SELECTOR);
  const rows = table.querySelectorAll("tbody > tr");
  const results = [];

  for (const row of rows) results.push(parseRow(row));

  log(results);
}
