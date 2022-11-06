import { TwitterVerified } from "components/Icons";
import { Anchor } from "components/MyLink";
import Image from "next/image";
import { twitterHeaderStyle } from "../styles/TwitterHeader.module.css";

export function TweetHeader({ author }) {
  if (!author) {
    throw new Error("TwitterHeader: author is required");
  }

  return (
    <header className={twitterHeaderStyle}>
      <div className="twitter-profile-image">
        <Image
          src={`https://unavatar.io/twitter/${author.username}`}
          width={73}
          height={73}
          alt={`Imagen de perfil de ${author.name}`}
          loading="lazy"
          objectFit="layout"
        />
      </div>
      <div className="twitter-username">
        <Anchor href={author.url || `https://twitter.com/${author.username}`}>
          {`@${author.username}`}
        </Anchor>
        {author.verified && (
          <TwitterVerified $strokeValue="var(--twitter-verified)" />
        )}
      </div>
    </header>
  );
}
