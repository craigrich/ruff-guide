import Layout from 'components/Layout';
import { useRouter } from 'next/router';

export const Restaurant = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>Region</p>
    </Layout>
  );
};

export default Restaurant;
