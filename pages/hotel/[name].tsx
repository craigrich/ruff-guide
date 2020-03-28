import Layout from 'components/Layout';

import Gallery from 'components/Gallery';
import Availability from 'components/Availability';
import { createClient, EntryCollection } from 'contentful';
import { Hotel as HotelType } from 'contentful-types';
import encodeName from 'lib/encodeName';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const Hotel = (props) => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-6xl capitalize text-center">Pascoe House</h1>
        <p className="text-xl text-center ">
          Located in Crediton in the Devon region, Gunstone House has a garden.
          The property is 30 miles from Sidmouth, and guests benefit from
          complimentary WiFi and private parking available on site.
        </p>
        <Gallery />
        <Availability />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const hotels: EntryCollection<HotelType> = await client.getEntries({
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
  const hotels: EntryCollection<HotelType> = await client.getEntries({
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

export default Hotel;
