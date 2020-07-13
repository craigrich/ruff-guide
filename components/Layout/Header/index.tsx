import Link from 'next/link';

function Header() {
  return (
    <header className="container mx-auto">
      <div className="px-4 my-5 mb-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="text-gray-900 font-black text-3xl">The Ruff Guide</a>
          </Link>
          <div>
            {/* <a href="#home" className="text-md font-bold">
              about
            </a> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
