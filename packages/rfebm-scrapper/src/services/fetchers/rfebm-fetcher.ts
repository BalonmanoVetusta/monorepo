const MAX_TRIES = 5;
let counter = 0;

export async function rfebmFetcher(
  url: string | URL,
  init: RequestInit = {}
): Promise<string> {
  init.method ??= 'GET';
  init.redirect ??= 'follow';

  const apiUrl = url instanceof URL ? url.href : url;

  try {
    const response = await fetch(apiUrl, init);
    if (!response.ok) throw new Error('Error while fetching the webpage');

    const asText = response.text();

    return asText;
  } catch (error) {}

  return '';
}
