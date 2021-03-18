import { Asset } from 'contentful';
import { useState } from 'react';
import Lightbox from 'components/Lightbox';
import Image from 'components/Image';

interface Props {
  images: Asset[];
}

function Gallery({ images }: Props) {
  const [isLightboxOpen, setIslightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleImageClick(index) {
    setSelectedIndex(index);
    setIslightboxOpen(true);
  }

  function handleModalClose() {
    setSelectedIndex(0);
    setIslightboxOpen(false);
  }

  return (
    <div className="p-8">
      <Lightbox
        selectedIndex={selectedIndex}
        images={images}
        isOpen={isLightboxOpen}
        onClose={handleModalClose}
      />
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
          <Image onClick={() => handleImageClick(0)} image={images[0]} />
        </div>
        <div className="w-full md:w-1/2 mb-4 px-2">
          <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
              <Image onClick={() => handleImageClick(1)} image={images[1]} />
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
              <Image onClick={() => handleImageClick(2)} image={images[2]} />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <Image onClick={() => handleImageClick(3)} image={images[3]} />
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
          <Image onClick={() => handleImageClick(4)} image={images[4]} />
        </div>
        <div className="w-full sm:w-1/3 h-32 md:h-48 px-2">
          <Image onClick={() => handleImageClick(0)} image={images[0]} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
