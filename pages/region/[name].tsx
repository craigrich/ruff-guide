import Layout from 'components/Layout';

import { createClient, Entry, EntryCollection } from 'contentful';
import { Region as RegionType } from 'contentful-types';
import encodeName from 'lib/encodeName';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface Props {
  regionData: Entry<RegionType>;
}

export const Region = ({ regionData }: Props) => {
  const { fields } = regionData;
  return (
    <Layout>
      <div className="container mx-auto flex-wrap">
        <h1 className="text-6xl capitalize text-center">{fields.name}</h1>
        <p className="text-xl text-center ">{fields.description}</p>
        <div className="flex flex-wrap mt-8">
          {[...new Array(3)].map((index) => (
            <div className="w-1/3 p-4" key={index}>
              <img
                className="w-full object-cover object-center rounded-lg"
                src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                alt=""
              />
              <div className="pt-4 pb-0 h-auto md:h-40 lg:h-40">
                <div className="font-semibold mb-2 text-lg md:text-base lg:text-lg ">
                  Woman standing under blue sky
                </div>
                <div className="text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quidem blanditiis unde asperiores? debitis!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const regions: EntryCollection<RegionType> = await client.getEntries({
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
  const regions: EntryCollection<RegionType> = await client.getEntries({
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

export default Region;
