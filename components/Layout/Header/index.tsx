function Header() {
  return (
    <header className="container mx-auto">
      <div className="px-4 my-5">
        <nav className="flex justify-between items-center">
          <div className="text-gray-900 font-black text-3xl">
            Country Escapes
          </div>
          <div>
            <a href="#home" className="text-md font-bold">
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
