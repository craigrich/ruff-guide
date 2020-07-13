import Link from 'next/link';
import { Entry } from 'contentful';
import { Post } from 'contentful-types';
import encodeName from 'lib/encodeName';
import Image from 'components/Image';

interface Props {
  post: Entry<Post>;
}

function PostCard({ post }: Props): JSX.Element {
  const { fields, sys } = post;

  return (
    <Link as={`/post/${encodeName(sys.id)}`} href="/post/[name]">
      <div className="flex justify-center mt-10 mb-20 cursor-pointer">
        <div className="w-1/3">
          <div className="flex justify-center">
            <Image image={fields.heroImage} />
          </div>
          <div className="font-semibold my-4 text-2xl text-center">
            {fields.title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
