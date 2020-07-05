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
    <Layout title="The Ruff Guide">
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
