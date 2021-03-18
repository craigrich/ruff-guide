import React, { useMemo } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Asset } from 'contentful';

interface Props {
  images: Asset[];
  isOpen: boolean;
  selectedIndex: number;
  onClose: () => void;
}

function Lightbox({ images, isOpen, onClose, selectedIndex }: Props) {
  const views = useMemo(
    () =>
      images.map((image) => ({
        source: image.fields.file.url
      })),
    [images]
  );
  return (
    <ModalGateway>
      {isOpen ? (
        <Modal
          allowFullscreen={false}
          closeOnBackdropClick={false}
          onClose={onClose}
        >
          <Carousel
            currentIndex={selectedIndex}
            styles={{
              container: (base) => ({
                ...base,
                height: '100vh'
              }),
              view: (base) => ({
                ...base,
                alignItems: 'center',
                display: 'flex ',
                height: 'calc(100vh - 54px)',
                justifyContent: 'center',
                '& > img': {
                  maxHeight: 'calc(100vh - 94px)'
                }
              })
            }}
            frameProps={{ autoSize: 'height' }}
            views={views}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
}

export default Lightbox;
