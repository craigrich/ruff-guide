function comingSoon() {
  alert('Coming Soon!');
}

function Footer() {
  return (
    <footer className="bg-black text-white pb-10 lg:pb-10 mt-10 lg:mt-0 lg:h-56 pt-12 text-sm lg:mt-20">
      <div className="container mx-auto">
        <div className="px-4">
          <div className="md:flex justify-between ">
            <ul>
              <li className="mb-3 font-bold">The Ruff Guide</li>
              <li className="mb-2">
                <a onClick={comingSoon} href="">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a onClick={comingSoon} href="">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a onClick={comingSoon} href="">
                  Contact
                </a>
              </li>
            </ul>
            <ul>
              <li className="mb-3 font-bold mt-8 lg:mt-0">Follow Us</li>
              <li className="mb-2">
                <a onClick={comingSoon} href="">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a onClick={comingSoon} href="">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
