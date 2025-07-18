// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-zinc-900 text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: Brand & Tagline */}
                    <div className="mb-6 md:mb-0">
                        <img
                            src="/images/giliza/giliza-logo-white.png"
                            alt="Giliza Coffee Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-sm">
                            Premium Arabica coffee, sourced from Africa and artisan roasted in Dubai.
                        </p>
                    </div>

                    {/* Column 2: Site Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigation</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
                            <li><Link href="/products/" className="hover:text-white transition-colors duration-200">Our Products</Link></li>
                            <li><Link href="/about-us/" className="hover:text-white transition-colors duration-200">About Us</Link></li>
                            <li><Link href="/contact/" className="hover:text-white transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Coffee Education */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Coffee Education</h3>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="/education/brew-like-barista/" className="hover:text-white transition-colors duration-200">Brew Like a Barista</Link></li>
                            <li><Link href="/education/flavor-infusion/" className="hover:text-white transition-colors duration-200">Flavor Infusion</Link></li>
                            <li><Link href="/education/flying-monkey/" className="hover:text-white transition-colors duration-200">The Flying Monkey</Link></li>
                            <li><Link href="/education/why-arabica/" className="hover:text-white transition-colors duration-200">Why Arabica?</Link></li>
                            <li><Link href="/education/coffee-guide/" className="hover:text-white transition-colors duration-200">Coffee Guide</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Stay Connected */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Stay Connected</h3>
                        <div className="flex justify-start space-x-5 mt-4">
                            <Link href="#" className="hover:text-white transition-colors duration-200"><span className="sr-only">Instagram</span><FaInstagram size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200"><span className="sr-only">Facebook</span><FaFacebookF size={20} /></Link>
                        </div>
                        <p className="mt-4 text-sm">
                            <Link href="mailto:info@giliza.com" className="hover:text-white transition-colors duration-200">info@giliza.com</Link>
                        </p>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm">&copy; {currentYear} Giliza Coffee. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
