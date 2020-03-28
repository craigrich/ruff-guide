import { Hotel } from 'contentful-types';
import { EntryCollection, Entry } from 'contentful';

import encodeName from 'lib/encodeName';
import client from 'lib/contentfulClient';
import Layout from 'components/Layout';
import Gallery from 'components/Gallery';
import Availability from 'components/Availability';

interface Props {
  hotelData: Entry<Hotel>;
}

function HotelPage({ hotelData }: Props) {
  const { fields } = hotelData;

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-6xl capitalize text-center">{fields.name}</h1>
        <p className="text-xl text-center ">{fields.description}</p>
        <Gallery images={fields.gallery} />
        <Availability rooms={fields.rooms} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const hotels: EntryCollection<Hotel> = await client.getEntries({
    content_type: 'hotel'
  });
  return {
    paths: hotels.items.map(
      (hotel) => `/hotel/${encodeName(hotel.fields.name)}`
    ),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const hotels: EntryCollection<Hotel> = await client.getEntries({
    content_type: 'hotel'
  });
  const hotelData = hotels.items.find(
    (hotel) => encodeName(hotel.fields.name) === params.name
  );
  return {
    props: {
      hotelData
    }
  };
}

export default HotelPage;
