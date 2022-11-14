export const TWITTER_BASE_API_URL = "https://api.twitter.com";
export const TWITTER_DEFAULT_MAX_RESULTS = 10;

export const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || null;
export const TWITTER_USER_ID = process.env.TWITTER_USER_ID || null;
export const TWITTER_TIMELINE_TWEETS =
  process.env.TWITTER_TIMELINE_TWEETS ?? TWITTER_DEFAULT_MAX_RESULTS;
