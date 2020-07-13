import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title = 'Country Escapes' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
