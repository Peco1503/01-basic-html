import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/" legacyBehavior>
            <a className="hover:text-rick-and-morty-yellow">Rick and Morty Wiki</a>
          </Link>
        </div>
        <div>
          <Link href="/characters" legacyBehavior>
            <a className="hover:text-rick-and-morty-yellow mx-4">All Characters</a>
          </Link>
          <Link href="/favorites" legacyBehavior>
            <a className="hover:text-rick-and-morty-yellow mx-4">Favorite Characters</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
