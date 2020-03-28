import Layout from 'components/Layout';

import { createClient, Entry, EntryCollection } from 'contentful';
import { Region } from 'contentful-types';
import encodeName from 'lib/encodeName';
import Highlight from 'components/Highlight';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface Props {
  regionData: Entry<Region>;
}

export const RegionPage = ({ regionData }: Props) => {
  const { fields } = regionData;
  console.log('fields', fields);
  return (
    <Layout>
      <div className="container mx-auto flex-wrap">
        <h1 className="text-6xl capitalize text-center">{fields.name}</h1>
        <p className="text-xl text-center ">{fields.description}</p>
        <div className="flex flex-wrap mt-8">
          {fields.hotels.map((hotel) => (
            <Highlight item={hotel} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const regions: EntryCollection<Region> = await client.getEntries({
    content_type: 'region'
  });
  return {
    paths: regions.items.map(
      (region) => `/region/${encodeName(region.fields.name)}`
    ),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const regions: EntryCollection<Region> = await client.getEntries({
    content_type: 'region'
  });
  const regionData = regions.items.find(
    (region) => encodeName(region.fields.name) === params.name
  );
  return {
    props: {
      regionData
    }
  };
}

export default RegionPage;
