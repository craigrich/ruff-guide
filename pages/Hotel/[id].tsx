import Layout from 'components/Layout';

import Gallery from 'components/Gallery';
import Availability from 'components/Availability';

export const Hotel = () => {
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

export default Hotel;
