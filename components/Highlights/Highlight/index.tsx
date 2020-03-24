import Link from 'next/link';
import { Entry, Asset } from 'contentful';
import { Hotel, Region } from 'contentful-types';
import { lookup } from 'fp-ts/lib/Array';
import { map, getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';

interface Props {
  item: Entry<Hotel> | Entry<Region>;
}

function Highlight({ item }: Props) {
  const { fields, sys } = item;
  const contentType = sys.contentType.sys.id;
  const imgHref = pipe(
    lookup(0, fields.gallery),
    map((image: Asset) => image.fields.file.url),
    getOrElse(() => 'http://via.placeholder.com/640x360')
  );
  console.log('item', item);
  return (
    <Link
      // as={`/${contentType}/${fields.name}`}
      href={`/${contentType}/${sys.id}`}
    >
      <div className="lg:w-1/3 md:mx-4 cursor-pointer">
        <img
          className="w-full object-cover object-center rounded-lg"
          src={imgHref}
          alt="featuredImage"
        />
        <div className="pt-4 pb-0 h-auto md:h-40 lg:h-40">
          <div className="font-semibold mb-2 text-lg md:text-base lg:text-lg ">
            {fields.name}
          </div>
          <div className="text-sm leading-relaxed block md:text-xs lg:text-sm">
            {fields.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Highlight;
