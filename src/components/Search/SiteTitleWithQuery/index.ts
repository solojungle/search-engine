export function SiteTitleWithSearchQuery(
  query: string | string[] | undefined,
): string {
  const queryString = Array.isArray(query) ? query[0] : query;

  const truncatedQuery =
    queryString && queryString.toString().length > 20
      ? `${queryString.toString().substring(0, 20)}...`
      : queryString;

  const title = truncatedQuery
    ? `${truncatedQuery} | aliawari.com`
    : 'aliawari.com';

  return title;
}
