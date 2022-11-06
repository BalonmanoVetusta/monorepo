import {
  TWITTER_BEARER_TOKEN,
  TWITTER_BASE_API_URL,
  TWITTER_USER_ID,
} from "./constants";

export const TWITTER_FETCH_ERRORS = {
  NOT_BEARER_TOKEN: "Twitter API: Not Bearer Token",
  FETCH_ERROR: "Twitter API: Fetch Error",
  AUTHORIZATION: "Twitter API: Authorization Error",
  UNKNOWN: "Twitter API: Unknown Error",
};

export async function twitterFetch(url, options = {}) {
  if (!TWITTER_BEARER_TOKEN) {
    throw new Error(TWITTER_FETCH_ERRORS.NOT_BEARER_TOKEN);
  }

  options.headers ??= {};
  options.headers.authorization ??= `Bearer ${TWITTER_BEARER_TOKEN}`;
  options.headers["Content-Type"] ??= "application/json";

  try {
    const response = await fetch(url, options);

    if (!response) {
      throw new Error(TWITTER_FETCH_ERRORS.FETCH_ERROR);
    }

    if (response.status === 401) {
      throw new Error(TWITTER_FETCH_ERRORS.AUTHORIZATION);
    }

    if (!response.ok) {
      throw new Error(TWITTER_FETCH_ERRORS.UNKNOWN);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    if (Object.values(TWITTER_FETCH_ERRORS).includes(error.message)) {
      throw new Error(error);
    }

    throw new Error(TWITTER_FETCH_ERRORS.UNKNOWN);
  }
}
