
// @flow
export type MatchType = {
  params: {
    postUrl: string,
    id: string,
    slug: string,
    collection: string,
    searchType: string,
    query: string,
    page: number,
  },
  url: string,
};

export type LocationType = {
  hash: string,
  pathname: string,
};
