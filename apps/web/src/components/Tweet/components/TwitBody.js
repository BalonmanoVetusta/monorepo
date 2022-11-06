import Image from "next/image";
import { Fragment, useId } from "react";
import { replaceTweetEntities } from "../lib/replaceTweetEntities";
import styled from "styled-components";

const Blockquote = styled.blockquote`
  white-space: pre-line;
`;

function TweetMedia({ media, alt = null, ...props }) {
  const id = useId();
  const { width, height, url, type } = media;

  if (type === "photo" || type === "animated_gif") {
    // eslint-disable-next-line camelcase
    const { alt_text = null } = media;
    return (
      <Image
        src={url}
        width={width}
        height={height}
        alt={
          alt ??
          // eslint-disable-next-line camelcase
          alt_text ??
          "Imagen sin descripción, rogamos disculpas pues nuestro CEO no sabe usar la opción ALT de twitter"
        }
        layout="intrinsic"
        objectFit="contain"
        objectPosition={"center"}
        loading="lazy"
      />
    );
  }

  if (type === "video") {
    const { variants } = media;
    return (
      <video
        poster={media.preview_image_url}
        width={width}
        height={height}
        preload="metadata"
        controls={true}
        playsInline={true}
        webkit-playsinline={true}
      >
        {variants.map(({ content_type: contentType, url }, key) => (
          <source
            key={`${id}-video-${key}`}
            src={`${url}#t=0.1`}
            type={contentType}
          />
        ))}
      </video>
    );
  }

  return null;
}

export function TweetBody({ tweet }) {
  if (!tweet) {
    throw new Error("TwitBody: tweet is required");
  }

  const tweetHtml = replaceTweetEntities(tweet);

  return (
    <Fragment>
      <main>
        <Blockquote>{tweetHtml}</Blockquote>
        {tweet?.includes?.media?.length > 0
          ? tweet.includes.media.map((m, k) => <TweetMedia media={m} key={k} />)
          : null}
      </main>
    </Fragment>
  );
}
