import Layout from 'components/Layout';
import Highlights from 'components/Highlights';
import Search from 'components/Search';

function HomePage() {
  return (
    <Layout title="Country Escapes">
      <Search />
      <div className="container mx-auto">
        <Highlights
          title="Top Regions"
          description="Explore the best places to stay in the UK countryside"
          count={3}
        />

        <Highlights
          title="Featured Hotels"
          description="See our favourite picks of luxury hideaways"
          count={4}
        />

        <Highlights
          title="Foodie Highlights"
          description="check out our selection of michelin star hotels"
          count={4}
        />
      </div>
    </Layout>
  );
}

export default HomePage;
