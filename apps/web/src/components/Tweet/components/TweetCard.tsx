import { TweetFooter } from "./TweetFooter";
import { TweetHeader } from "./TweetHeader";
import { TweetBody } from "./TweetBody";

export function TweetCard({ tweet }) {
  if (!tweet) {
    throw new Error("TweetCard: tweet is required");
  }

  const { author, text } = tweet;

  if (!author) {
    throw new Error("TweetCard: author is required");
  }

  if (!text) {
    throw new Error("TweetCard: text is required");
  }

  return (
    <article className="tweet-card">
      <TweetHeader author={author} />
      <TweetBody tweet={tweet} />
      <TweetFooter created_at={tweet.created_at} />
    </article>
  );
}
