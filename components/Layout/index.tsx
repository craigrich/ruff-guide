import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={`https:${metadata.image}`} />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
