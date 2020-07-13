import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Post } from 'contentful-types';
import { EntryCollection, Entry } from 'contentful';
import Image from 'components/Image';

import encodeName from 'lib/encodeName';
import client from 'lib/contentfulClient';
import Layout from 'components/Layout';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  postData: Entry<Post>;
}

const Text = ({ children }) => (
  <p className="text-xl text-center my-8">{children}</p>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url } = node.data.target.fields.file;
      return (
        <div className="my-8 flex justify-center">
          <div className="w-1/3">
            <Image image={node.data.target} />
          </div>
        </div>
      );
    }
  }
};

function PostPage({ postData }: Props) {
  const { fields } = postData;
  const { content } = fields as any;

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-6xl capitalize text-center">{fields.title}</h1>
        {documentToReactComponents(content, options)}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts: EntryCollection<Post> = await client.getEntries({
    content_type: 'post'
  });
  return {
    paths: posts.items.map((post) => `/post/${encodeName(post.sys.id)}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const posts: EntryCollection<Post> = await client.getEntries({
    content_type: 'post'
  });
  const postData = posts.items.find(
    (post) => encodeName(post.sys.id) === params.name
  );
  return {
    props: {
      postData
    }
  };
}

export default PostPage;
