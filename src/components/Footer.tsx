import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/logo.svg" alt="FlatPool Logo" className="h-8" />
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <Facebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Twitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} FlatPool. All rights reserved.
      </div>
    </footer>
  );
}
