import Link from 'next/link';
import { Entry } from 'contentful';
import { Hotel, Region } from 'contentful-types';
import encodeName from 'lib/encodeName';
import Image from 'components/Image';

interface Props {
  item: Entry<Hotel> | Entry<Region>;
}

function Highlight({ item }: Props) {
  const { fields, sys } = item;
  const contentType = sys.contentType.sys.id;
  return (
    <Link
      as={`/${contentType}/${encodeName(fields.name)}`}
      href={`/${contentType}/[name]`}
    >
      <div className="lg:w-1/3 md:mx-4 lg:h-1/3 cursor-pointer ">
        <div className="h-40 lg:h-56 ">
          <Image image={fields.gallery[0]} />
        </div>
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
