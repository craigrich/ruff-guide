import { Region, Hotel } from 'contentful-types';
import { Entry } from 'contentful';
import { isArray } from 'util';
import Highlight from './Highlight';

interface Props {
  title: string;
  description: string;
  items: (Entry<Region> | Entry<Hotel>)[];
}

function Highlights({ title, description, items }: Props) {
  if (!isArray(items)) {
    return null;
  }
  return (
    <article className="px-4 md:-mx-4 mt-12">
      <div className="px-4">
        <div className="text-2xl font-bold">{title}</div>
        <p className="mb-4">{description}</p>
      </div>
      <div className="md:flex justify-between">
        {items.map((item: Entry<Region> | Entry<Hotel>) => (
          <Highlight key={item.sys.id} item={item} />
        ))}
      </div>
    </article>
  );
}

export default Highlights;
