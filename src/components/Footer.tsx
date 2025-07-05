import { Facebook, Twitter, Instagram } from "lucide-react";
import LogoSvg from "@/components/common/logo";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-2 px-2">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <LogoSvg className="h-8 w-auto fill-white stroke-white" />
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
