import { BLOCKS, INLINES } from '@contentful/rich-text-types';
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

const Link = ({ children, href }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={href}
    className="text-blue-500 hover:text-blue-300"
  >
    {children}
  </a>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={data.uri}>{children}</Link>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div className="my-8 flex justify-center">
          <div className="lg:w-1/3">
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
    <Layout
      metadata={{
        title: fields.title,
        image: fields.heroImage.fields.file.url
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl px-8 lg:px-0 capitalize text-center">
          {fields.title}
        </h1>
        <div className="px-8 lg:px-0">
          {documentToReactComponents(content, options)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts: EntryCollection<Post> = await client.getEntries({
    content_type: 'post'
  });
  const postsBySlug = posts.items.map(
    (post) => `/post/${encodeName(post.fields.slug)}`
  );
  const postsById = posts.items.map(
    (post) => `/post/${encodeName(post.sys.id)}`
  );
  return {
    paths: postsBySlug.concat(postsById),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const posts: EntryCollection<Post> = await client.getEntries({
    content_type: 'post'
  });
  const postData = posts.items.find(
    (post) =>
      encodeName(post.fields.slug) === params.name ||
      encodeName(post.sys.id) === params.name
  );
  return {
    props: {
      postData
    }
  };
}

export default PostPage;
