import Layout from 'components/Layout';
import { useRouter } from 'next/router';

export const Region = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="container mx-auto flex-wrap">
        <h1 className="text-6xl capitalize text-center">{router.query.id}</h1>
        <p className="text-xl text-center ">
          Devon is one of England’s most diverse locations, with its dramatic
          coastline, golden sands, wild moors, busy cities, rolling countryside
          and pretty seaside towns. Our collection of luxury hotels explores
          everything Devon has to offer.
        </p>
        <div className="flex flex-wrap mt-8">
          {[...new Array(6)].map((value, index) => (
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

export default Region;
