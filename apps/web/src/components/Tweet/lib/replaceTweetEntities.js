/* eslint-disable camelcase */
import { Anchor } from "components/MyLink";
import { cloneElement, Fragment, isValidElement } from "react";

function parseUrl({ url, expanded_url, display_url }) {
  return <Anchor href={expanded_url || url}>{display_url}</Anchor>;
}

function parseHashtag({ tag }) {
  return <Anchor href={`https://twitter.com/hashtag/${tag}`}>#{tag}</Anchor>;
}

function parseMentions({ username }) {
  return <Anchor href={`https://twitter.com/${username}`}>{username}</Anchor>;
}

function ArrayComponent({ value }) {
  if (!Array.isArray(value)) {
    throw new Error("ArrayComponent: value must be an array");
  }

  return (
    <Fragment>
      {value.map((item, key) => {
        if (isValidElement(item)) {
          return cloneElement(item, { key });
        }

        if (typeof item === "string" || item?.toString) {
          return item || item.toString();
        }

        return null;
      })}
    </Fragment>
  );
}

export function replaceTweetEntities({ text, entities }) {
  const tweetText = [...text];
  const { urls = [], hashtags = [], mentions = [] } = entities || {};
  const allEntities = [...urls, ...hashtags, ...mentions];
  allEntities.sort((a, b) => (a.start < b.start ? -1 : 1));
  const result = [];
  let nextStart = 0;

  for (const entity of allEntities) {
    const { start, end } = entity;
    const textBefore = tweetText.slice(nextStart, start).join("");
    nextStart = start + end;
    result.push(textBefore);
    if (entity.tag) {
      result.push(parseHashtag(entity));
    }
    if (entity.url) {
      result.push(parseUrl(entity));
    }
    if (entity.username) {
      result.push(parseMentions(entity));
    }
    nextStart = end;
  }

  return <ArrayComponent value={result} />;
}
