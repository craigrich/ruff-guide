import { Room } from 'contentful-types';
import { Entry } from 'contentful';
import Image from 'components/Image';
import { useState } from 'react';
import Lightbox from 'components/Lightbox';

interface Props {
  room: Entry<Room>;
}

function RoomEntry({ room }: Props) {
  const { fields } = room;
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
    <div className="flex flex-column mb-10">
      <Lightbox
        selectedIndex={selectedIndex}
        images={fields.gallery}
        isOpen={isLightboxOpen}
        onClose={handleModalClose}
      />
      <div className="w-1/3 md:h-48 ">
        <Image onClick={() => handleImageClick(0)} image={fields.gallery[0]} />
      </div>

      <div className="w-2/3 pl-4">
        <div className="px-8 bg-white rounded-lg">
          <div className="text-2xl text-gray-700 font-bold hover:text-gray-600">
            {fields.name}
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>

          <div className="flex justify-between items-baseline mt-4">
            <p className="mr-8 text-gray-600">
              Rates per night from:{' '}
              <span className="font-semibold text-xl text-black">£250</span>
            </p>
            <button className="bg-blue-500 text-white p-2 rounded text-xl font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomEntry;
