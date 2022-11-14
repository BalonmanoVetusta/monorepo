import { DEFAULT_LOCALE } from "../lib/constants";

// eslint-disable-next-line camelcase
export function TweetFooter({ created_at, locale = DEFAULT_LOCALE }) {
  const date = Date.parse(created_at);
  const dateString = Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);

  return (
    <footer className="tweet-footer">
      <p className="tweet-date">{dateString}</p>
    </footer>
  );
}
