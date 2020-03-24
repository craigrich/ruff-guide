import Layout from 'components/Layout';

import { createClient, Entry } from 'contentful';
import { Region as RegionType } from 'contentful-types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface Props {
  regionData: Entry<RegionType>;
}

export const Region = ({ regionData }: Props) => {
  const { fields } = regionData;
  console.log('regionData', regionData);

  return (
    <Layout>
      <div className="container mx-auto flex-wrap">
        <h1 className="text-6xl capitalize text-center">{fields.name}</h1>
        <p className="text-xl text-center ">{fields.description}</p>
        <div className="flex flex-wrap mt-8">
          {[...new Array(3)].map((hotel) => (
            <div className="w-1/3 p-4" key={hotel.sys.id}>
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
  return {
    paths: ['/region/7fiDk62p6Hgz5JvV35uynx'],
    fallback: false
  };
}

export async function getStaticProps() {
  const regionData: Entry<RegionType> = await client.getEntry(
    '7fiDk62p6Hgz5JvV35uynx'
  );
  return {
    props: {
      regionData
    }
  };
}

export default Region;
