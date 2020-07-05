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
    <Link as={`/post/${encodeName(fields.location)}`} href="/post/[name]">
      <div className="lg:w-1/3 md:mx-4 lg:h-1/3 cursor-pointer ">
        <div className="h-40 lg:h-56 ">
          <Image image={fields.heroImage} />
        </div>
        <div className="pt-4 pb-0 h-auto md:h-40 lg:h-40">
          <div className="font-semibold mb-2 text-lg md:text-base lg:text-lg ">
            {fields.title}
          </div>
          <div className="text-sm leading-relaxed block md:text-xs lg:text-sm">
            Example description text
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
