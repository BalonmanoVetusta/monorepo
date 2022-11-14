import PageLayout from 'components/PageLayout';
import { TweetCard } from 'components/Tweet';
import { getLatestTimelineTwitts } from 'lib/twitter';

export default function IndexPage({ latestTwits = {} } = {}) {
  return (
    <PageLayout>
      <section>
        <h1>Últimos Twitts</h1>
        <div>
          <TweetCard tweet={latestTwits.data[0]} />
          <pre>{JSON.stringify(latestTwits, null, 2)}</pre>
          Por ahora aquí no se cargará nada hasta que esté listo
        </div>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps(context) {
  let latestTwitsResult = {};
  try {
    latestTwitsResult = await getLatestTimelineTwitts();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      latestTwits: latestTwitsResult ?? []
    },
    revalidate: 300
  };
}
