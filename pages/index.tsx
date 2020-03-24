import { createClient, Entry } from 'contentful';
import Layout from 'components/Layout';
import Highlights from 'components/Highlights';
import Search from 'components/Search';
import { HomePageLayout } from 'contentful-types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

interface Props {
  homepageData: Entry<HomePageLayout>;
}

function HomePage({ homepageData }: Props) {
  return (
    <Layout title="Country Escapes">
      <Search />
      <div className="container mx-auto">
        <Highlights
          title="Top Regions"
          description="Explore the best places to stay in the UK countryside"
          items={homepageData.fields.regions}
        />
        <Highlights
          title="Featured Hotels"
          description="See our favourite picks of luxury hideaways"
          items={homepageData.fields.featuredHotels}
        />
        <Highlights
          title="Foodie Highlights"
          description="check out our selection of michelin star hotels"
          items={homepageData.fields.foodieHighlights}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const homepageData: Entry<HomePageLayout> = await client.getEntry(
    '4XYSEJlMN6WzB9blGoBXsY'
  );
  return {
    props: {
      homepageData
    }
  };
}

export default HomePage;
