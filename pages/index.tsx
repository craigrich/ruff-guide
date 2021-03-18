import { createClient, EntryCollection } from 'contentful';
import Layout from 'components/Layout';
import { Post } from 'contentful-types';
import PostCard from 'components/PostCard';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface Props {
  postsData: EntryCollection<Post>;
}

function HomePage({ postsData }: Props): JSX.Element {
  return (
    <Layout
      metadata={{
        title: 'The Ruff Guide',
        image:
          'http://images.ctfassets.net/tqywocep0fhp/4IyH1Oxh0hqj8oRHKtYryh/c2ffc1e732e5e78e37c6e472d07da2cf/80AEBC7E-FC83-4378-8FC8-14F195AAD299-AE2B9B1D-E66E-4972-A69A-094F805AEB54.JPG'
      }}
    >
      <div className="container mx-auto">
        {postsData.items.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsData: EntryCollection<Post> = await client.getEntries();
  return {
    props: {
      postsData
    }
  };
}

export default HomePage;
