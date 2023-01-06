export function rfebmUrlCreator(
  baseUrl: string,
  pathname: string,
  queryParams: object
): URL {
  const completeUrl = [baseUrl, pathname].join('/');
  const url = new URL(completeUrl);
  Object.entries(queryParams).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  return url;
}
