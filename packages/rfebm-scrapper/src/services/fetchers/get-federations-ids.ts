import { getHtmlJSDOM } from 'dependencies';
import { SelectOptions, selectOptions } from 'services/parsers';
import { getUrlFederationPage } from 'services/urls';
import { rfebmFetcher } from './rfebm-fetcher';

export async function getFederationsIds(
  federationId = 9999
): Promise<SelectOptions> {
  const url = getUrlFederationPage(federationId);

  const selector = '#territorial';

  const htmlDocument = await rfebmFetcher(url);

  if (!htmlDocument) return {} as SelectOptions;

  const { document } = getHtmlJSDOM(htmlDocument);

  return selectOptions(document, selector);
}
