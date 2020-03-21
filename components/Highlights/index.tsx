import Highlight from './Highlight';

function Highlights({ title, description, count = 4 }) {
  return (
    <article className="px-4 md:-mx-4 mt-12">
      <div className="px-4">
        <div className="text-2xl font-bold">{title}</div>
        <p className="mb-4">{description}</p>
      </div>
      <div className="md:flex justify-between">
        {[...new Array(count)].map((value, index) => (
          <Highlight
            key={index}
            href={count === 3 ? '/region/devon' : '/hotel/123'}
          />
        ))}
      </div>
    </article>
  );
}

export default Highlights;
