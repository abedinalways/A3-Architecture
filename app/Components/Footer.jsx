import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#8b3f31] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-2xl font-semibold tracking-wide">Troscán</h1>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left text-white/90">
        {/* Sitemap */}
        <div>
          <h3 className="text-sm mb-3 text-white/70">Sitemap</h3>
          <ul className="space-y-2 text-lg font-light">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm mb-3 text-white/70">Socials</h3>
          <ul className="space-y-2 text-lg font-light">
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">LinkedIn</Link>
            </li>
            <li>
              <Link href="#">Twitter</Link>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-sm mb-3 text-white/70">More</h3>
          <ul className="space-y-2 text-lg font-light">
            <li>
              <Link href="#">License</Link>
            </li>
            <li>
              <Link href="#">Grainient</Link>
            </li>
            <li>
              <Link href="#">Inspirux</Link>
            </li>
            <li>
              <Link href="#">Store</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full mx-auto my-4" />
      <p className='text-center font-[archivo]'>© 2025, All rights reserved</p>
    </footer>
  );
};

export default Footer;
