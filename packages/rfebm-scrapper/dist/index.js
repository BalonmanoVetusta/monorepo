// src/dependencies/getHtmlJSDOM.ts
import { parseHTML } from "linkedom";
function getHtmlJSDOM(htmlInput) {
  const parser = parseHTML(htmlInput);
  return parser;
}

// src/services/parsers/select-options.ts
function selectOptions(document, querySelector) {
  const { options } = document.querySelector(
    querySelector
  );
  const optionsArray = Array.from(options);
  const mappedOptions = optionsArray.map((option) => [
    option.value.toString(),
    {
      id: Number(option.value),
      label: option.textContent
    }
  ]);
  return Object.fromEntries(mappedOptions);
}

// src/constants/index.ts
var { env } = process ?? Bun ?? Deno ?? {};
var {
  RFEBM_BASE_URL = "https://www.rfebm.com/competiciones",
  ISQUAD_HANDBALL = "https://balonmano.isquad.es",
  RFEBM_AMBITO_ZERO = 0,
  RFEBM_AMBITO_ONE = 1,
  RFEBM_COURT_COMPETITIONS_SELECTION = 0,
  ISQUAD_TOKEN = "3196a2e896f030126138678fa6a5c19e",
  ISQUAD_SEC = "8bbbcd3eaebf094cebb543f342d5a87c"
} = env ?? {};

// src/services/urls/rfebm-url-creator.ts
function rfebmUrlCreator(baseUrl, pathname, queryParams) {
  const completeUrl = [baseUrl, pathname].join("/");
  const url = new URL(completeUrl);
  Object.entries(queryParams).forEach(
    ([key, value]) => url.searchParams.append(key, value)
  );
  return url;
}

// src/services/urls/get-url-federation-page.ts
import { RFEBM_BASE_URL as RFEBM_BASE_URL2, RFEBM_COURT_COMPETITIONS_SELECTION as RFEBM_COURT_COMPETITIONS_SELECTION2 } from "constants";
function getUrlFederationPage(federationId = 9999) {
  return rfebmUrlCreator(RFEBM_BASE_URL2, "competicion.php", {
    seleccion: RFEBM_COURT_COMPETITIONS_SELECTION2,
    id_territorial: federationId
  });
}

// src/services/fetchers/rfebm-fetcher.ts
async function rfebmFetcher(url, init = {}) {
  init.method ??= "GET";
  init.redirect ??= "follow";
  const apiUrl = url instanceof URL ? url.href : url;
  try {
    const response = await fetch(apiUrl, init);
    if (!response.ok)
      throw new Error("Error while fetching the webpage");
    const asText = response.text();
    return asText;
  } catch (error) {
  }
  return "";
}

// src/services/fetchers/get-federations-ids.ts
async function getFederationsIds(federationId = 9999) {
  const url = getUrlFederationPage(federationId);
  const selector = "#territorial";
  const htmlDocument = await rfebmFetcher(url);
  if (!htmlDocument)
    return {};
  const { document } = getHtmlJSDOM(htmlDocument);
  return selectOptions(document, selector);
}

// src/index.ts
getFederationsIds().then(console.log);
//# sourceMappingURL=index.js.map