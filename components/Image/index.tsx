import { Asset } from 'contentful';
import useProgressiveImage from 'lib/useProgressiveImage';

interface Props {
  image: Asset;
  onClick?: () => void;
}

function Image({ image, onClick = () => {} }: Props) {
  const [source, hasLoaded] = useProgressiveImage({
    src: `${image.fields.file.url}`,
    fallbackSrc: `${image.fields.file.url}?q=10`
  });

  return (
    <img
      src={source}
      className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover rounded-md overflow-hidden"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.keyCode === 13) onClick();
      }}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="widget"
      style={{
        transition: 'filter .3s ease',
        filter: !hasLoaded ? 'blur(3px' : 'unset'
      }}
    />
  );
}

export default Image;
