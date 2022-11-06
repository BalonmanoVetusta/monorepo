import { TWITTER_BASE_API_URL } from "./constants";
import { twitterFetch } from "./twitterFetch";

export const TWITTER_PROFILE_DATA_ERRORS = {
  EXPECTED_PARAMS: "Twitter API: expected params userId or screenName"
};

function getProfileApiUrl({ userId = null, screenName = null }) {
  if (!userId && !screenName) {
    throw new Error("Twitter API: userId or screenName is required");
  }

  let params = "";
  if (screenName) {
    params = `screen_name=${screenName}`;
  }

  if (userId) {
    params = `user_id=${userId}`;
  }

  return `${TWITTER_BASE_API_URL}/1.1/users/show.json?${params}`;
}

export async function getProfileData({ userId = null, screenName = null }) {
  const apiUrl = getProfileApiUrl({ userId, screenName });
  const response = await twitterFetch(apiUrl);

  return response;
}
