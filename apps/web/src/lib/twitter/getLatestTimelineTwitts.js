import {
  TWITTER_BASE_API_URL,
  TWITTER_DEFAULT_MAX_RESULTS,
  TWITTER_TIMELINE_TWEETS,
  TWITTER_USER_ID,
} from "./constants";
import { mapTwitsResult } from "./mapTwitsResult";
import { twitterFetch } from "./twitterFetch";

export const TWITTER_LASTEST_TIMELINE_ERRORS = {
  UNKNOWN: "Twitter API: Unknown Error",
  NOT_CONFIGURED: "Twitter API: Not Configured",
};

function getTimeLineApiUrl(
  userId,
  maxResults = TWITTER_DEFAULT_MAX_RESULTS,
  queryParameters = null
) {
  return `${TWITTER_BASE_API_URL}/2/users/${userId}/tweets?max_results=${maxResults}${
    queryParameters ? `&${queryParameters}` : ""
  }`;
}

export async function getLatestTimelineTwitts(
  userId = TWITTER_USER_ID,
  maxResults = TWITTER_TIMELINE_TWEETS,
  queryParameters = "exclude=replies,retweets&expansions=author_id,geo.place_id,attachments.media_keys,attachments.poll_ids,entities.mentions.username,referenced_tweets.id.author_id&tweet.fields=id,created_at,text,author_id,attachments,geo,entities,source,lang&user.fields=id,name,username,protected,verified,profile_image_url,url,description,entities&media.fields=media_key,duration_ms,height,preview_image_url,type,url,width,alt_text,variants&place.fields=id,name,place_type,full_name,country,geo&poll.fields=id,options,voting_status,end_datetime"
) {
  if (process.env.NODE_ENV === "development") {
    const mockData = require("mockData/timelineResponse.json");

    return mapTwitsResult(mockData);
  }

  try {
    if (!userId || !maxResults) {
      throw new Error(TWITTER_LASTEST_TIMELINE_ERRORS.NOT_CONFIGURED);
    }

    const apiUrl = getTimeLineApiUrl(userId, maxResults, queryParameters);

    const twitts = await twitterFetch(apiUrl);
    const resolvedMediaTwits = mapTwitsResult(twitts);

    return resolvedMediaTwits;
  } catch (error) {
    console.error({ error });
    return {
      status: 500,
      error:
        error.message === TWITTER_LASTEST_TIMELINE_ERRORS.NOT_CONFIGURED
          ? error.message
          : TWITTER_LASTEST_TIMELINE_ERRORS.UNKNOWN,
    };
  }
}
