export function mapTwitsResult(
  responseObject = { data: {}, includes: { media: [], users: [] } }
) {
  const {
    data: twits,
    includes: { media: medias, users },
  } = responseObject;
  const result = {};

  result.data = twits.map((twit) => {
    const twitResult = { ...twit };

    if (Array.isArray(users) && users.length > 0) {
      twitResult.author = users.find((user) => user.id === twit.author_id);
    }

    if (twit.attachments) {
      twitResult.attachments.media = twit.attachments.media_keys.map(
        (mediaKey) => medias.find((media) => media.media_key === mediaKey)
      );
    }

    return twitResult;
  });

  return { ...responseObject, ...result };
}
